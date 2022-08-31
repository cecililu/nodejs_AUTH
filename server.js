const express=require("express")
const app=express()

require('dotenv').config()
const {authRouter}=require('./routes/auth')
const dbconnect=require("./db")
const mongoose=require('mongoose')
app.use(express.json());



app.use('/api/v1',authRouter)

  
app.listen(3000,()=>{
    console.log('server start')
})
dbconnect()