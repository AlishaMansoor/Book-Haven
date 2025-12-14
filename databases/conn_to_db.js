//requiring mongoose library to connect with mongo database
const mongoose= require('mongoose');

// const mongoURI= 'mongodb://127.0.0.1:27017/bookManagementdb';
const mongoURL= process.env.MONGOURL;
async function main(){
return mongoose.connect(mongoURL);
}

module.exports=main;