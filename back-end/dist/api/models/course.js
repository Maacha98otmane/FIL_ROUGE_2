"use strict";

var mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    maxLength: 150,
    trim: true
  },
  slug: {
    type: String,
    require: true,
    maxLength: 42
  },
  level: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true,
    maxLength: 2000
  },
  price: {
    type: Number,
    require: true
  },
  photo: {
    type: Buffer,
    require: true
  },
  hours: {
    type: String
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Course', courseSchema);