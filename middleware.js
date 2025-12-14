const Books=require('./models/book_schema.js');

module.exports.isLoggedin=(req,res, next)=>{
    if(!req.isAuthenticated()){
        req.flash("failure", "you need to Login first!");
        return res.redirect('/users/login');
    }
    next();//this next starts, from where we have called this middleware!
  
}

module.exports.isOwner= async(req, res, next)=>{
    const Id = req.params.id;
    let curr_book= await Books.findOne({ _id: Id });
    console.log(`current user in route ${res.locals.curr_user}`);
    if(!curr_book.owner._id.equals(res.locals.curr_user._id)){
        req.flash("failure","You don't have permission!");
           return res.redirect(`/Books/${Id}`);
    }
    next();
}   