const mongoose=require('mongoose');
const Books=require('../models/book_schema.js');
const connectDB=require('../databases/conn_to_db.js');
const bookdata=require('./data.js');



async function initdata(){
   try{
    await connectDB();
    console.log("Connected to database");

    await Books.deleteMany({});
    console.log("Old books deleted");
    // bookdata.sampleBooks.map((obj)=>({...obj, owner:"ObjectId('67db42412f23ce0a60466d50')"}));
    
    // console.log("🔍 Checking bookdata:", bookdata); // Debugging log

    if (!bookdata || !bookdata.sampleBooks) {
        throw new Error("❌ sampleBooks is undefined. Check data.js export.");
    }

    const modifiedBooks = bookdata.sampleBooks.map((obj) => ({
        ...obj,
        owner: new mongoose.Types.ObjectId('68cd6e084e1de564f7a0d617')  // ✅ Correct ObjectId format
    }));

    await Books.insertMany(modifiedBooks);
    console.log("book data inserted");

} catch(err) {
    console.log(err);
}
}
initdata();
  