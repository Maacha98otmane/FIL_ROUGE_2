const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        maxLength: 150,
        trim: true
    },
    slug: {
        type: String,
        require: true,
    },
    level: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
        maxLength: 2000
    },
    price: {
        type: Number,
        require: true,
    },
    photo: {
        type:String,
        require: true,
    },
    hours: {
        type: String,
    },
    category: {
        type: String,
        require: true,
    },
}, {timestamps: true});

module.exports = mongoose.model('Course', courseSchema);