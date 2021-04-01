const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  User: String,
  body: String
});

const Post = mongoose.model("Post", PostSchema);

module.exports = mongoose.model('Post',Post);