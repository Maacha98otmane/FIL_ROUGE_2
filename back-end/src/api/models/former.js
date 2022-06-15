const mongoose = require('mongoose');
const User = require('./user')
const formerSchema = new mongoose.Schema({
  nameStore: {
    type: String,
    required: true,

  },
  status: {
    type: String,
    trim: true,
    enum: {
      values: ['Starter', 'Pro', 'Expert'],
      message: 'is not supported'
    },
    default: "Starter",
  },
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
  collection: "formers"
});
formerSchema.pre('remove',async function(next){
  const former = this
  await User.deleteOne({_id:former.user})
  next()
})
module.exports = mongoose.model('Former', formerSchema);