const express = require('express');
const router = express.Router({ mergeParams: true });
const User = require('../models/user');
const Review =require('../models/review');
const Books =require('../models/book_schema');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const {isLoggedin}  = require('../middleware.js');


router.get('/signup', (req, res) => {
  res.render("users/signup.ejs");
});


router.post('/signup', async (req, res, next) => {
  const { email, username, password } = req.body;

  try {
    // CHECK IF EMAIL ALREADY EXISTS
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      req.flash("error", "Email is already registered.");
      return res.redirect('/users/signup');
    }

    // CREATE USER
    let newUser = new User({
      email,
      username
    });

    // REGISTER USER (passport-local-mongoose)
    const registeredUser = await User.register(newUser, password);

    // LOGIN USER
    req.login(registeredUser, (err) => {
      if (err) {
        console.error("Login Error:", err);
        return next(err);//next is not defined here, if if-condition does not exist, it will give error
      }

      // FORCE SESSION SAVE BEFORE REDIRECT
      req.session.save(err => {
        if (err) {
          console.error("Session Save Error:", err);
          return next(err);
        }

        req.flash("success", `Welcome, ${username}! to Book Haven`);
        res.redirect('/Books');
      });
    });

  } catch (err) {
    req.flash("error", err.message);
    res.redirect('/users/signup');
  }
});
 


//login get api
router.get('/login', (req, res) => {
  console.log("Logged-in user:", req.user);
  // When a user logs in, Passport automatically stores their details in req.user.
  res.render("users/loginform.ejs");
}
);

//login post api
router.post('/login', passport.authenticate('local', { 
  failureRedirect: '/users/login',
  failureFlash:  'Invalid username or password.'
}),
  (req, res) => {
  req.flash("success", "Welcome Back to Book Haven!");
  res.redirect('/Books');
});



//logout get api
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "you are logged out!");
    res.redirect('/Books');
  });

});

//delete account api(POST)
router.delete("/deleteaccount", isLoggedin, async(req,res)=>{
       try {
        console.log("deleteaccount route hit!");
        if (!req.user) {
            return res.redirect("/users/login");
        }
     const userId = req.user._id;
     const username=req.user.username;
     await Review.deleteMany({ review_author: userId });  //Delete all reviews of this user
     await Books.deleteMany({ owner: userId }); //Delete all books uploaded by this user
     console.log(`reviews and books of user ${username} are deleted!`);
     await User.findByIdAndDelete(userId); //Delete the user
      req.logout(function (err) { //Logout user
            if (err) {
                console.log(err);
            }
            res.redirect("/Books");
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error deleting account");
    }
});

module.exports = router;