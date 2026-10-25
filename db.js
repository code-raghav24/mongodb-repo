const mongoose = require('mongoose');
const connectionString = "mongodb://localhost:27017/wap";

const connectDB = async()=>{
  try{
    await mongoose.connect(connectionString);
    console.log('connection with database SUCCESS');
  }catch(err){
    console.log("error in db connection");
    console.log(err.message);
  }
}

module.exports ={
  connectDB,
  mongoose,
} 




