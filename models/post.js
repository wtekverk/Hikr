import mongoose from 'mongoose';


const postSchema = mongoose.Schema({
   body: String,
   activity: String,
   duration: String,
   creator: String,
   points: Number,
   createdAt: {
     type: Date,
     default: new Date()
   }
});



const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;