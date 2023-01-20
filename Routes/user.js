const { Router } = require("express");
const UserModel = require("../Models/user");
const clothrouter = Router()

clothrouter.post("/user/cloth", async (req, res) => {
  console.log(req.body);

  try {
  const newUser = new UserModel({
    id: req.body.id,
    img1:req.body.img1,
    img2:req.body.img2,
    title:req.body.title,
    price: req.body.price,
  });
      const userdata= await newUser.save()
      res.send(userdata)
      
  } catch (error) {
      console.log(error)
  }
});

clothrouter.get("/user/cloth",async(req,res)=>{
  try {
      const userdata= await UserModel.find()
      res.send(userdata)
  } catch (error) {
      console.log(error)
  }
})





 


module.exports = clothrouter;