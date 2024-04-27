const mongoose = require("mongoose");

const facultyCourseMappingSchema = new mongoose.Schema({
    fmapid: {
        type: String,
        required: true,
        unique: true,
        default: () => generateRandomId()
    },
    facultyid: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    ccode: {
        type: String,
        required: true
    },
    ctitle: {
        type: String,
        required: true
    },
    component: {
        type:[String],
        required: true,
        enum: ['L', 'T', 'P', 'S']
    },
    section: {
        type: Number,
        required: true
    }
});

const Mapping = mongoose.model('Mapping', facultyCourseMappingSchema);

function generateRandomId() {
    return Math.floor(Math.random() * 90000) + 10000;
}

module.exports = Mapping;
