const { Router } = require("express");
const UserModel = require("../Models/user");
const clothrouter = Router();

clothrouter.post("/user/cloth", async (req, res) => {
  console.log(req.body);


  const newUser = new UserModel({
    id: req.body.id,
    img1:req.body.img1,
    img2:req.body.img2,
    title:req.body.title,
    price: req.body.price,
  });

  newUser
    .save()
    .then(() => {
      res.send({ code: 200, message: "data added success" });
    })
    .catch((err) => {
      res.send({ code: 500, message: "Something went wrong" });
    });
});

// kycrouter.get("/user/kyc/:id",async(req,res)=>{
//   try {
//       const _id= req.params.id;
//       const kycdata= await UserModel.findById(_id)
//       console.log(kycdata)

//       if(!kycdata){
//           return res.status(404).send()
//       }else{
//           return res.send(kycdata)
//       }
//   } catch (error) {
//       console.log(error)
//   }
// })


 


module.exports = clothrouter;
