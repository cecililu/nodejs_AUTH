
const mongoose=require("mongoose")
const Schema = mongoose.Schema;


const UserS = new Schema({

    name: { 
    type: String,
    required:true ,
    min:6
   },
    email: {
    type:String,
    required:true,
    min:6 ,
    max:255 
    },
    password: { 
    type: String ,required:true ,min:6,
     max:2553
    }
});

const Users = mongoose.model('User',UserS);

module.exports=Users 