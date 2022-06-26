const mongoose = require('mongoose');
const User = require('./user')
const formerSchema = new mongoose.Schema({
  isVerified : {
    type: String,
    default: false,    
  },
  rating: {
    type: Number,
    default: 0,
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