const { model, Schema } = require("mongoose");

const postSchema = Schema({
  body: String,
  activity: String,
  duration: String,
  creator: String,
  points: Number,
  fileUpload: String,
  likes: { type: Number, default: 0 },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
s;
const PostMessage = model("PostMessage", postSchema);

module.exports = PostMessage;
