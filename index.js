const {connectDB,mongoose} = require("./db.js");
connectDB();

const User = require("./schema/user.schema.js");

const express = require('express');
const app = express();
const PORT = 8080;
const bodyReader = express.json();

app.listen(PORT, ()=>{
  console.log('server running on port: ' + PORT);
})

app.get('/user/:id', async(req,res)=>{
  const {id} = req.params;
  console.log(id);
  //check where the id received is valid is not before querying to db
  if(!mongoose.isValidObjectId(id)){
    res.status(400).json({error:"Invalid id"})
  }
  const user = await User.findById(id);
  //if no user was found
  if(!user) res.status(404).json({error:"user not found"})
  //cheking the method that was defined in schema
  user.intro();
  res.status(200).json(user);
})

app.post("/user", bodyReader, async(req,res)=>{
  try{
    const payload = req.body;
    const newUser = new User(payload);
    await newUser.save();
    newUser.intro();
    res.status(200).json(payload);
  }catch(err){
    res.status(500).json({
      message:err.message
    })

  }
})

app.put("/user",(req,res)=>{
  res.status(200).json({
    message:"update user here"
  })
})

app.delete("/user",(req,res)=>{
  res.status(200).json({
    message:"user deleted here"
  })
})
