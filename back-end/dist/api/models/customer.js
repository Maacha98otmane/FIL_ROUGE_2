"use strict";

var mongoose = require('mongoose');

var costumerSchema = new mongoose.Schema({
  isVerified: {
    type: String,
    "default": false
  },
  rating: {
    type: Number,
    "default": 0
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
}, {
  collection: "customers"
});
module.exports = mongoose.model('Costumer', costumerSchema);