"use strict";

var mongoose = require('mongoose');

var storeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    maxLength: 12,
    trim: true
  },
  former: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Former'
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Store', storeSchema);