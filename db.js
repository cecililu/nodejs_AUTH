const mongoose=require("mongoose")
require('dotenv').config()
const dbconnect=async()=>{
    mongoose.connect('mongodb+srv://cecilghi:<>@cluster0.58v39nr.mongodb.net/test'.replace('<>',process.env.DB_PASS)).then(()=>console.log("SUCESSS")).catch(()=>console.log("DB_FAILURE"))  
}

module.exports=dbconnect