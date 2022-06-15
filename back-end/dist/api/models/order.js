"use strict";

var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  course: [{
    courseId: {
      type: String
    },
    quantity: {
      type: Number,
      "default": 1
    }
  }],
  amount: {
    type: Number,
    required: true
  },
  address: {
    type: Object,
    required: true
  },
  status: {
    type: String,
    "default": "pending"
  }
}, {
  timestamps: true
}, {
  collection: "orders"
});
module.exports = mongoose.model('Order', orderSchema);