const express=require('express');
const router=express.Router({mergeParams:true});

const Review=require('../models/review.js');
const Books = require('../models/book_schema.js');
const ExpressError = require('../utils/ExpressError.js');


//route for reviews (POST)
router.post('/', async (req, res) => {
    // console.log("Review Route Hit!");
    // console.log("Review Data:", req.body);
    try {
        const book=await Books.findById(req.params.id);
        if (!book) {
            return res.status(404).send("Book not found");
        }

         // Validate rating and review content
        if (!req.body.rating) {
            req.flash("error", "Please add a rating to the review!");
            return res.redirect(`/books/${book._id}`);
        }

        if (!req.body.reviewcontent || req.body.reviewcontent.trim() === "") {
            req.flash("error", "Review content cannot be empty!");
            return res.redirect(`/books/${book._id}`);
        }


        // const newreview = new Review(req.body);
        const reviewData = 
            {
               reviewuser:req.user.username,
               reviewcontent:req.body.reviewcontent ,
               createdAt:Date.now(),
               review_author: req.user._id,         // link to User model
               rating:req.body.rating,         //rating  exist now
            }

        const newReview = new Review(reviewData);
        console.log(res.locals.curr_user);
        console.log(newReview);
        await newReview.save();
        book.reviews.push(newReview._id);
        // book.reviews.push(newreview._id);
        await book.save();
        req.flash("success", "Review Added!");
        // console.log("Review added successfully!");
        res.redirect(`/books/${book._id}`);
    } catch (err) {
        res.status(500).send("Error saving review.");
    }
});




//route for review(DELETE)
router.delete('/:reviewid', async (req,res)=>{
try{
    let {id, reviewid} = req.params;

    console.log(req.params);
await Books.findByIdAndUpdate(id, {$pull: {reviews:reviewid}});
await Review.findByIdAndDelete(reviewid);
req.flash("success", "Review Deleted!");
res.status(200).redirect(`/Books/${id}`);

}catch(err){
    console.log(err);
    res.status(400).send("some issue in deleting")
}

});

module.exports=router;