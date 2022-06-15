const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    description: {
        type: String,
        require: true,
        maxLength: 32,
        trim: true
    },
    rating: {
        type: Number,
        require: true,
        min: 1,
        max: 5
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdFor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
}, {timestamps: true});

module.exports = mongoose.model('Review', reviewSchema);