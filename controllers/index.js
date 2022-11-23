// all the controllers functions exported from here
const { list_courses, find_course } = require("../services");

const listCourses = async (req, res) => {
  try {
    const courses = await list_courses();
    res.send(courses);
  } catch (error) {}
};

const courseDetailes = async (req, res) => {
  const id = req.params.course_id;
  //console.log(req);
  try {
    const course = await find_course(id);
    console.log(course);
    res.send(course);
  } catch (error) {
    // please make a proper error handling, like when it fails
    // send a failed message to the client whith some reasons
    console.log(error);
  }
};

module.exports = { listCourses, courseDetailes };
