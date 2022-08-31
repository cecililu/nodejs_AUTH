
const router= require("express").Router()
const { request } = require("express")
const User=require("../models/User")
router.post('/register',async(req,res)=>{
      console.log(req.body)
        user=User({name:req.body.name, email:request.body.email,password:request.body.password})
        await user.save()


})

module.exports.authRouter=router