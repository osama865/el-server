const { Courses, Enrollments, Students } = require("../models");

const list_courses = async () => {
  // if everything okay, return the result without creating variables
  return await Courses.find({}, null, { limit: 10, skip: 0 });
};

const find_course = async (id) => {
  // if everything okay, return the result without creating variables
  return await Courses.findOne({ _id: id }).exec();
};

const add_enrollment = async (enrollment = {}) => {
  // if everything okay, return the result without creating variables
  return await Enrollments.insertMany(enrollment).populate("student");
};

const add_student = async (studentObj = {}) => {
  // if everything okay, return the result without creating variables
  const student = new Students(studentObj);
  student.save();
  console.log(student);
};

const list_enrollments = async () => {
  // if everything okay, return the result without creating variables
  const res = await Enrollments.find({}, null, { limit: 10, skip: 0 }).populate(
    ["courses", "student"]
  );
  console.log(res);
  return res;
};

const a = {
  name: "osama ibrahim",
  no_university: 1112019,
  signup_date: new Date(),
  specialization: "computer science",
  bookmarks: [],
  books: [],
  courses: [],
  materials: [],
};

b = {
  name: "ali hasan",
  no_university: 54654546,
  signup_date: new Date(),
  specialization: "Law",
  bookmarks: [],
  books: [],
  courses: [],
  materials: [],
};

c = {
  name: "khaled Mustafa",
  no_university: 8979832,
  signup_date: new Date(),
  specialization: "software engineering",
  bookmarks: [],
  books: [],
  courses: [],
  materials: [],
};

module.exports = {
  list_courses,
  find_course,
  add_enrollment,
  list_enrollments,
};

/**
 * osama 635ad8ac20da869377b2fc01
 * khaled 635ad8ac20da869377b2fc03
 * ali 635ad8ac20da869377b2fc02
 */
