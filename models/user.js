const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  User: String,
  Email: String,
  Password: String
});

const User = mongoose.model("User", UserSchema);

module.exports = User;