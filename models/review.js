const mongoose=require('mongoose');

const reviewschema=new mongoose.Schema({
reviewuser:{
    type:String,
    default:"Joe",
},
rating:{
    type:Number,
    min:1,
    max:5,
    default:3,
    required:true,
},
reviewcontent:String,
createdAt:{
    type:Date,
    default:Date.now(),
},
 review_author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Review=mongoose.model("Review", reviewschema);
module.exports=Review;