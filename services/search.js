const { Courses } = require("../models");

const generalSearch = async (query = "") => {
  // if everything okay, return the result without creating variables
  return await Courses.find({ $text: { $search: query } }).exec();
};

console.log(generalSearch("mongodb"));

module.exports = { generalSearch };
