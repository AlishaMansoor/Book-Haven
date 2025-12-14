//requiring express
const express = require('express');
//initializing express
const app = express();
//Import path module **1
const path = require("path");
//requiring method-override **2
const methodoverride = require("method-override");
//requiring ejs mate for styling ejs templates(includes)
const ejsmate = require("ejs-mate");


require("dotenv").config();



//attaching model
const Books = require('./models/book_schema.js');
const Review=require('./models/review.js');
const User=require('./models/user.js');

//requiring ExpressError for any random request, so that error can be handled easily without server crashing
const ExpressError = require('./utils/ExpressError.js');

//requiring express-session
const session=require('express-session');
//requiring mongo session store, As express-session is not compatible for production level
const MongoStore = require('connect-mongo');
//requiring connect-flash
const flash=require('connect-flash');
const passport=require('passport');
const LocalStrategy=require('passport-local');

//attaching/requiring database connection file
const connectDB = require('./databases/conn_to_db.js');//importing main function(function for connecting to database) inside this file
//calling the function connectDB which is imported by the file conn_to_db.js
connectDB()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Database Connection Failed:", err);
    });

const port = 3000;
  
//Middlewares
app.use(express.urlencoded({ extended: true })); // Required to parse HTML-form data
app.use(express.json());//for JSON requests (e.g., from hoppscotch)

app.set("view engine", "ejs");
app.engine("ejs", ejsmate)
app.set("views", path.join(__dirname, "views"));// **2
app.use(methodoverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));


const store=MongoStore.create(
    {
        mongoUrl:process.env.MONGOURL,
       collectionName: 'sessions',
       touchAfter: 24 * 3600
    }
);
store.on("error", (error)=>{
    console.log("Error in Mongo SessionStore", error); 
})

const sessionOptions={ 
    secret:process.env.SESSION_SECRET,
    store, 
    resave:false,
    saveUninitialized:false,
    cookie: {//setting cookie information
        
        expires:Date.now()+1*24*60*60*1000,
        maxAge:1*24*60*60*1000,
        httpOnly:true,
    },
}



//using express-session
app.use(session(sessionOptions));
//using flash
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());//passport use this to login user into session
passport.deserializeUser(User.deserializeUser());//passport use this to logout user from session



//a middleware, which added a flash message from req.flash to res.locals as a variable named success. now we can sent this success variable to template.
app.use((req, res, next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.curr_user=req.user || null; // passport adds req.user automatically, Now curr_user is available in every EJS file.
    //ejs templates can only access req.locals.variables...unlike res.user
    next();
});
// console.log("Current user:", curr_user);
//landing page(same as allbooks)
app.get('/', (req, res) => {
    res.redirect('/Books'); // or '/allbooks'
});

//requiring book.js for /Books routes
const Bookies= require('./routes/Books.js');
app.use('/Books', Bookies);


//requiring review.js for /Books/:id/review routes
const reviews= require('./routes/review.js');
app.use('/Books/:id/review', reviews);


//requiring user.js for /user routes
const users= require('./routes/user.js');
// const { log } = require('console');
app.use('/users', users);


//route for handle any path request
app.all('*', (req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

//middleware to handle 
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;
    res.render("error.ejs", { statusCode, message });
});

    


app.listen(port, () => {
    console.log(`server is listening at port ${port}`);
});

