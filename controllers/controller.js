const controller = "Our controllers for the models should go here";

// heres the controllers from the activity 04 in 21 MERN
const path =require('path');
const User = require("../models/user");
const Post = require("../models/post");


  exports.createPost = function (req, res) {
    var newPost = new Post(req.body);
    newPost.save(function (err) {
      if(err) {
        res.status(400).send("Not linked to Database")
      }
    })
  }

  
  

