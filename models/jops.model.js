const mongoose = require('mongoose');

const jopSchema = new mongoose.Schema({

    jobTitle: {
        type: String,
        required: true,
    },
    jobLocation: {
        type: String,
        required: true,
    },
    workingTime: {
        type: String,
        required: true,
    },
    seniorityLevel: {
        type: String,
        required: true,
        enum: ["Junior", "Mid - Level", "Senior", "Team - Lead", "CTO"],
    },
    jobDescription: {
        type: String,
        required: true,
    },
    technicalSkills: {
        type: String,
        required: true,
    },
    softSkills: {
        type: String,
        required: true
    },
    addedBy: {
        type: String,
        required: [true, "who is added this job"],
    },
});

module.exports = mongoose.model('Job', jopSchema);