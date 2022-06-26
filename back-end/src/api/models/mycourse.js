const mongoose = require('mongoose');

const myCourseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    }
}, {timestamps: true});

module.exports = mongoose.model('MyCourse', myCourseSchema);