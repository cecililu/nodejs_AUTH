const router= require("express").Router()

const User=require("../models/User")

router.post('/register',async(req,res)=>{
      const alreadyExist=User.findOne(req.body.email)
      console.log(alreadyExist)
       if (!alreadyExist){
        const user = new User({ 
        name :req.body.name,
        email: req.body.email,
        password:req.body.password,  
      })
      try{
      const usersaved = await user.save();
      res.send(usersaved);
      }catch(e){
       console.log('user could not be saved',e)
       res.send(err)
      }
    }
     else {
      res.send("An account with that email already exists")
     }
        
        


})

module.exports.authRouter=router