"use strict";

var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
  isVerified: {
    type: String,
    "default": false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
}, {
  collection: "clients"
});
module.exports = mongoose.model('Client', clientSchema);