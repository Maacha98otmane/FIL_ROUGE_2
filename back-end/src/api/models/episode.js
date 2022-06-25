const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        maxLength: 150,
        trim: true
    },
    number: {
        type: Number,
        require: true,
        min: 1,
    },
    slug: {
        type: String,
        require: true,
        maxLength: 42
    },
    path: {
        type: String,
        require: true,
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    }
   
}, {timestamps: true});

module.exports = mongoose.model('Episode', episodeSchema);