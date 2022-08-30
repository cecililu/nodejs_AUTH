const express=require("express")
const app=express()
const {authRouter}=require('./routes/auth')




app.use('/api/v1',authRouter)

app.listen(3000,()=>{
    console.log('server start')
})