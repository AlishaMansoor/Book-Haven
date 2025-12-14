const mongoose = require('mongoose');
// const Schema=mongoose.Schema;
const Review = require('./review.js');
const User = require('./user.js');

const bookschema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true,
    },
    image: {
        url:String,
        filename:String,
    },

    genre: {
     type: [ String],
     required:true, 
    },

    chapters: Number,

    part: Number,
    
    description: String,

    reviews: [

        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

});

//creating a mongoose post middleware to delete the reviews inside the reviews of book or in reviews collection 
//After deleting a individual book  
bookschema.post("findOneAndDelete", async (data) => {
    if (data) {
        await Review.deleteMany({ _id: { $in: data.reviews } });
    }
});
//creationg model
const Book = mongoose.model('Book', bookschema);
module.exports = Book;