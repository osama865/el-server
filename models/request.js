const mongoose = require("mongoose");

const Requestschema = new mongoose.Schema({
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

const Requests = mongoose.model("requests", Requestschema);

module.exports = Requests;