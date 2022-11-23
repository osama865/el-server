const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/elearn")

const CourseSchema = new mongoose.Schema({
    instructor: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    available_at: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        // required: true
    },
    learners: {
        type: Number,
        // required: true
    },
    related_docs: [],
    reviews: [],
    tags: [],
    date: {
        // turn it to Date
        type: String,
        required: true
    },
    release_date: {
        type: Date
    },
    introduction: {},
    cover: {
        type: String,
        required: true
    },
    lessons_count: {
        type: Number
    },
    level: {
        type: String
    },
    lessons: [],
    duration: {
        type: Number
    }
});

CourseSchema.index({
    title : "text",
    instructor : "text",
    category : "text",
    available_at : "text",
    description : "text",
}, {
    weights : {
        title : 10,
        description : 5,
        instructor : 5,
        category : 5,
        available_at : 5 ,
    }, name : "searchIndex", language_override : "none"
}
)

const Courses = mongoose.model("courses", CourseSchema);

module.exports = Courses;