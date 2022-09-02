const router= require("express").Router()

const User=require("../models/User")

//validation 
// const joi=require('@hapi/joi')
const Joi = require("@hapi/joi")

const schema={
  name :Joi.string()
      .min(6).required(),
  email: Joi.string().
      min(6).required()
      .email(),
  password:Joi.string()
      .min(6).
      required().
      email(),
}

router.post('/register',async(req,res)=>{
      // const alreadyExist=User.findOne(req.body.email)
      // console.log(alreadyExist)
       
      //validating the data
        // const validatation=Joi.validate(req.body,schema)
        // res.send(validatation)
        const user = new User({ 
        name :req.body.name,
        email: req.body.email,
        password:req.body.password,  
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