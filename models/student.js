const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  reviews: [],
  courses: [],
  materials: [],
  no_university: {
    type: Number,
    required: true,
  },
  signup_date: {
    type: Date,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  bookmarks: [],
  books: [],
});

const Students = mongoose.model("students", StudentSchema);

module.exports = Students;
