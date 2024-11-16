const mongoose = require('mongoose');

// Define the schema for projects
// "title": "2024-11-08T10:30:11.900Z",
//     "desc": "Joanna Mertz",
//     "coverimg": "https://loremflickr.com/640/480/animals",
//     "available": "South",
//     "price": "Kwacha",
//     "id": "1"
const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    coverimg: {
        type: String,
        required: true
    },
    available: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});

const Projects = mongoose.model('Projects', ProjectSchema);
module.exports = Projects;
