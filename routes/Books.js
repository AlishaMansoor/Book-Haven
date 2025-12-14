const express = require('express');
const router = express.Router({ mergeParams: true });
const mongoose = require("mongoose");

const Books = require('../models/book_schema.js');

const { upload } = require("../cloudinaryConfig.js");


const ExpressError = require('../utils/ExpressError.js');
const { isLoggedin } = require('../middleware.js');
const { isOwner } = require('../middleware.js');
// const isLoggedin = require('../app.js');   wrong import, because by this the whole express application(this.apply.js) is getting required instead of a single skipMiddlewareFunction, express in this.app.js doesnot support to export a single middleware function.
const allGenres = [
  "Self-help", "Fiction", "Romance", "Classic", "Mystery", "Fantasy",
  "Dystopian", "Historical Fiction", "Finance", "History",
  "Science Fiction", "Philosophy", "Biography"
];


// getting All Books(get request)
router.get('/', async (req, res) => {
    try{
    // console.log(Books);
    const genreFilter=req.query.genre;
    let books;
    if(genreFilter){
        books=await Books.find({genre:genreFilter});
    } else {
        books = await Books.find();
    }
     res.render("allbooks.ejs", { Books: books, allGenres,genre:genreFilter });
    // Books (first one) → The variable name sent to your EJS template.
    // books (lowercase) → The array of books fetched from MongoDB.
} catch (err){
    console.log("Error fetching books",err);
}
});


router.get('/addbook', isLoggedin, async (req, res) => {
    res.render("addbook.ejs");
});


//adding a new book (POST request)
//  [ got request from this (<form action="/Books" method="POST">) written in addbook.ejs ]
router.post('/', upload.single("image"), async (req, res) => {
    try {
        let genres = req.body.genre;
        if (!Array.isArray(genres)) {
            genres = [genres];
        }
        const newbook = new Books(
            {
                title: req.body.title,
                author: req.body.author,
                price: req.body.price,
                // image:req.body.image,
                // genre: req.body.genre,
                genre: genres,
                chapters: req.body.chapters,
                part: req.body.part,
                description: req.body.description,
                image: {
                    url: req.file.path,
                    filename: req.file.filename,
                }
            }
        );
        console.log(req.file);
        newbook.owner = req.user._id;
        await newbook.save();
        req.flash("success", "Book Added Successfully");
        res.redirect('/Books');
    } catch (err) {
        console.error("Error uploading book:", err);
        req.flash("error", "Something went wrong!");
        res.redirect("/Books");
    }
});







//updating/editing a book
//Editing an existing book on the basis of id (PUT request)

//  User clicks [Edit] next to a book in allbooks.ejs, which links to /edit/:id.
//  The GET route finds the book and renders edit-book.ejs with its details.
//  User updates the book(title and author), then submits the form.
//  The form sends a PUT request (via method-override) to /Books/:id.
//  The book is updated, and the user is redirected back to All Books.

router.get('/edit/:id', isLoggedin, isOwner, async (req, res) => {
    try {
        const Id = req.params.id;
        const book_to_edit = await Books.findById(Id);
     
        res.render("editbook.ejs", { book_to_edit, allGenres });

    } catch (err) {
        console.log(err);
        res.render("error.ejs");
    }
});

router.put('/:id', async (req, res) => {
    try {
        const Id = req.params.id;
        const to_updt_book = await Books.findOne({ _id: new mongoose.Types.ObjectId(Id) });
        if (!to_updt_book) {
            return res.status(404).send("Book not found");
        }
        let genres = req.body.genre;
        if (!Array.isArray(genres)) {
            genres = [genres];
        }
        to_updt_book.title = req.body.title;
        to_updt_book.author = req.body.author;
        to_updt_book.price = req.body.price;
        // to_updt_book.image = req.body.image ;
        to_updt_book.genre = genres;
        to_updt_book.chapters = req.body.chapters;
        to_updt_book.part = req.body.part;
        to_updt_book.description = req.body.description;
        if (req.file) {
            to_updt_book.image = {
                url: req.file.path,
                filename: req.file.filename
            };
        }

        await to_updt_book.save();
        req.flash("success", "Book Updated Successfully!")
        res.redirect(`/Books/${Id}`);
    } catch (err) {
        console.error("Error updating book:", err);
        req.flash("error", "Something went wrong while updating!");
        res.redirect(`/Books`);
    }
});




//get a single book by specific id (GET request)
router.get('/:id', async (req, res) => {

    try {
        const Id = req.params.id;
        const current_book = await Books.findById(Id)      // if reviews are embedded documents
            .populate({
                path: "reviews",
                populate: {
                    path: "review_author",
                    model: "User"
                }
            }).populate("owner");
        // console.log(current_book);
          if (!current_book) {
            return res.status(404).send("Book not found");
        }

        const book_ownerid=current_book.owner ? current_book.owner._id  : null;
        // console.log("Book owner ID:",book_ownerid);

            res.render("bookbyid.ejs", { current_book ,book_ownerid,curr_user: req.user   });
       

    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }

});





//Deleting a book using id(DELETE request)
router.delete('/:id', isLoggedin, isOwner, async (req, res) => {
    try {
        const Id = req.params.id;

        let deleted_book = await Books.findOneAndDelete({ _id: Id });
        if (!deleted_book) {
            return res.status(404).send("Book not found");
        }
        req.flash("success", "Book Deleted Successfully!");
        return res.redirect("/Books");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error deleting book");
    }
});




router.post('/book-result', async (req, res) => {
    try {
        const search = (req.body.search || "").trim();
        console.log("Search route hit with query:");

        if (!search) {
            req.flash("error", "Please enter a book name to search.");
            return res.redirect("/Books");
        }

        const current_book = await Books.find({
            title: { $regex: search, $options: "i" }
        });
        if (current_book.length === 0) {
            req.flash("error", "No book found with that title!");
            return res.redirect("/Books");
        }

        res.render("book-result.ejs", { current_book });
    } catch {
        console.error("Error during search:", err);
        req.flash("error", "Something went wrong while searching!");
        res.redirect("/Books");
    }
})



module.exports = router;