const { mongoose } = require("../db.js");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  age: Number,
});
//defining methos for schema
userSchema.methods.intro = function intro() {
  const introduction = `Hi, my name is ${this.name}.
  I'm ${this.age} year old ${this.gender}.
  You can send an email at: ${this.email} `;
  console.log(introduction);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
