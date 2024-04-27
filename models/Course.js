// Import necessary modules
const mongoose = require('mongoose');

// Define the Course schema
const courseSchema = new mongoose.Schema({
    department: {
        type: String,
        enum: ['CSE(REGULARS)', 'CSE(HONOURS)', 'CSIT'],
        required: true
    },
    program: {
        type: String,
        enum:['B.Tech','M.Tech'],
        required: true
    },
    ay: {
        type: String,
        enum:['2023-24','2022-23','2021-22'],
        required: true
    },
    sem: {
        type: String,
        enum:['EVEN','ODD'],
        required: true
    },
    year: {
        type: String,
        required: true
    },
    ccode: {
        type: String,
        required: true,
        unique:true
    },
    ctitle: {
        type: String,
        required: true,
        unique:true
    },
    ltps: {
        type: String,
        required: true
    },
    credits: {
        type: String,
        required: true
    }
});

// Create a model based on the schema
const Course = mongoose.model('Course', courseSchema);

// Export the model
module.exports = Course;
