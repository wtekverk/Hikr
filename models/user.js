const { Schema } = require("mongoose");

const UserSchema = new Schema({
  User: String,
  Email: String,
  Password: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = mongoose.model("User", User);
