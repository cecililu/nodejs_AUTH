const router= require("express").Router()

const User=require("../models/User")

router.post('/register',async(req,res)=>{
      
        const user = new User({ 
        name :req.body.name,
        email: req.body.email,
        password:req.body.password
      })
        const a= await user.save()
        res.send(a)
        


})

module.exports.authRouter=router