const mongoose = require('mongoose');
const clientSchema = new mongoose.Schema({
  isVerified : {
    type: String,
    default: false,    
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
}, {
  timestamps: true
}, {
  collection: "clients"
})
module.exports = mongoose.model('Client', clientSchema);