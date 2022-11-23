const fs = require("fs-extra");
const { add_enrollment, list_enrollments } = require("../../services");
const { convertSize } = require("../../utils/convert_size");
const generateFileName = require("../../utils/id_generator");
// console.log(uuid);
//console.log("osama is here")

function createUserFile(fileName = String, courses = []) {
  try {
    // make sure the courses array is not empty
    // need a function to remove white spaces
    // need a function to remove extensions
    // does overwriting is good or bad ?
    const writeStream = fs.createWriteStream(`${fileName}`);
    // write each value of the array on the file breaking line
    courses.forEach((value) => writeStream.write(`${value}\n`));

    // the finish event is emitted when all data has been flushed from the stream
    writeStream.on("finish", () => {
      console.log(`wrote all the array data to file ${writeStream.path}`);
    });

    // handle the errors on the write process
    writeStream.on("error", (err) => {
      console.error(`There is an error writing the file $ => ${fileName}`);
    });

    // close the stream
    writeStream.end();
  } catch (error) {
    console.log(error);
  }
}

/*
const requestedCourses = req.body.requestedCourses || [];
  const totalSize = req.body.totalSize || 0;
*/

const enroll = async (req, res) => {
  // get the list of courses to be written in the file
  const fileName = generateFileName() || "id_generator_not_working";
  const enrollmentObj = { ...req.body } || {};
  const requestedCourses = enrollmentObj.requestedCourses || [];

  enrollmentObj.totalSize = convertSize(req.body.totalSize);
  enrollmentObj.studentFileName = fileName;
  enrollmentObj.date = Date();

  // console.log(enrollmentObj);
  // create the file for this user/student
  try {
    // generate the id for file naming
    createUserFile(fileName, requestedCourses);
    res.send(
      `You can come and get your courses on next week \n NOTE: in your USB drive or disk, create folder with this name "${fileName}" make sure to create the folder with the correct name so our systems can recognise your hard/usb`
    );
  } catch (error) {
    console.log(error);
  }
  // save the object into requests collection
  try {
    const enr = await add_enrollment(enrollmentObj);
    console.log(enr);
  } catch (error) {
    console.log(error);
  }
};

const listEnrollments = async (req, res) => {
  try {
    const result = await list_enrollments();
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { enroll, listEnrollments };
