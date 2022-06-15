const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
    course: [
      {
        courseId: {
          type: String,
        }
      },
    ],
    amount: { type: Number, required: true },
    status: { type: String, default: "pending" },
}, {
  timestamps: true
}, {
  collection: "orders"
})
module.exports = mongoose.model('Order', orderSchema);