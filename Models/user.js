const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  id: {
    type: Number

  },
  img1:{
    type:String
  },
  img2:{
    type:String
  },
  title:{
    type:String
  },
  price: {
    type: Number
  }
});

const UserModel = mongoose.model("Cloth", UserSchema);

module.exports = UserModel;
