"use strict";

var mongoose = require('mongoose');

var ObjectId = mongoose.Schema.ObjectId;
var productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    maxLength: 150,
    trim: true
  },
  description: {
    type: String,
    require: true,
    maxLength: 2000
  },
  status: {
    type: Boolean,
    "default": true
  },
  price: {
    type: Number,
    require: true
  },
  quantity: {
    type: Number
  },
  photo: {
    // data: Buffer,
    // contentType: String
    type: String,
    require: true
  },
  category: {
    type: ObjectId,
    ref: 'Category',
    require: true
  },
  brand: {
    type: ObjectId,
    ref: 'Brand',
    require: true
  },
  store_id: {
    type: ObjectId,
    ref: 'Store',
    require: true
  } // ,
  // shipping: {
  //     type: Boolean,
  //     require: false,
  //     default: false
  // }

}, {
  timestamps: true
});
module.exports = mongoose.model('Product', productSchema);