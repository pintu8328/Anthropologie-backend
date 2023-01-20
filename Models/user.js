const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  id: {
    type: Number,
    require: true,
    trim: true
  },
  img1:{
    type:String,
    required:true
  },
  img2:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  price: {
    type: Number,
    require: true,
    trim: true,
  }
});

const UserModel = mongoose.model("cloth", UserSchema);

module.exports = UserModel;
