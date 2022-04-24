const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  fullname:  {type:String,}, // String is shorthand for {type: String}
  birtday: {type:String,},
  hometown:  {type:String,},
  intership:{type:String},
  gender: {type:String,},
  image: {type:String,},
  currentjob:{type:String}
});



module.exports = mongoose.model('users', userSchema)
