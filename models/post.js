const { model, Schema } = require("mongoose");

const postSchema = Schema({
  creator: String,
  activity: String,
  duration: String,
  points: Number,
  body: String,
  fileUpload: String,
  likes: { type: Number, default: 0 },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const PostMessage = model("PostMessage", postSchema);

module.exports = PostMessage;
