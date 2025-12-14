const mongoose= require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose');
const userschema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
         unique: true 
    },
    username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
    
}
);
userschema.plugin(passportLocalMongoose);
const User=mongoose.model("User", userschema);
module.exports= User;