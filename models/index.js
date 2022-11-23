const Courses = require("../models/course");
const Enrollments = require("../models/enrollment");
const Students = require("../models/student");
const Requests = require("../models/request");
const Issues = require("../models/issue");
const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/elearn");

module.exports = {
  Enrollments,
  Courses,
  Students,
  Requests,
  Issues,
};
