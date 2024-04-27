const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    facultyId: {
        type: String, 
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    },
    department: {
        type: String,
        enum: ['CSE(REGULARS)', 'CSE(HONOURS)', 'CSIT'],
        required: true
    },
    qualification: {
        type: String,
        enum: ['M.Tech', 'Ph.D.'],
        required: true
    },
    designation: {
        type: String,
        enum: ['Professor', 'Assistant Professor', 'Associate Professor'],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;