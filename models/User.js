
const mongoose=require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({

    name: { type: String },
    email: { type:String,  },
    password: { type: String },
});

const Users = mongoose.model('User',User);

module.exports=Users