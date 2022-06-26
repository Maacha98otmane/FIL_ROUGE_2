"use strict";

var mongoose = require('mongoose');

var costumerSchema = new mongoose.Schema({
  owncourse: {
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