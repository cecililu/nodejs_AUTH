const router= require("express").Router()
const bcrypt=require('bcryptjs')
const User=require("../models/User")
const { registervalidation } = require("../validation")





router.post('/register',async(req,res)=>{
      
        // const {error}=registervalidation(req.body)
        // if (error) return res.send(error.details[0].message)


        const useralready=await User.findOne({email:req.body.email})
        if (useralready){
           res.status(400).send("user already exist at that email")
        }

        //hash
        const salt=await bcrypt.genSalt(10)
        const hashpass=await bcrypt.hash(req.body.password,salt)
    
        const user = new User({ 
        name :req.body.name,
        email: req.body.email,
        password:hashpass,  
      })
      try{
      const usersaved = await user.save();
      res.send(usersaved);
      }
      catch(e){
        console.log('user could not be saved',e)
       res.send(err) 
      }
     
        
        


})

module.exports.authRouter=router