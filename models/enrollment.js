const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EnrollmentSchema = new Schema({
  date: {
    required: true,
    type: String,
  },
  // ref is for collection name that has the doument you want to refer to
  student: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "students",
  },
  courses: [{ type: Schema.Types.ObjectId, required: true, ref: "courses" }],
  totalSize: {
    type: String,
    required: true,
  },
  coursesCount: {
    type: Number,
    required: true,
  },
  requestedCourses: {
    type: Array,
    required: true,
  },
  deliveryDate: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Enrollments = mongoose.model("enrollments", EnrollmentSchema);

module.exports = Enrollments;
