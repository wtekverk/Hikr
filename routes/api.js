const app = require('express');
const Post = require("../models/post")
const router = app.Router();

router.get("/", (req, res) => { 
 res.render('index')
});

router.get("/posts", (req, res) => {
    db.Post.find({})
      .then(dbPost => {
        res.json(dbPost);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
app.post("/submit", ({ body }, res) => {
    db.Post.create(body)
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
});