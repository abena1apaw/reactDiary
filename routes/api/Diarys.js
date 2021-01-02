const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");



const Diary = require("../../models/Diary");

router.post("/Diary", (req, res) => {
         const newDiary = new Diary({
          title: req.body.title,
          author: req.body.author,
          content: req.body.content,
           category: req.body.category
        });       
      
     Diary.create(newDiary)
     .then(function(dbDiary) {
       //view the added results in the console
       console.log(dbDiary);
       res.json(dbDiary);
     })
     .catch(function(err) {
       
       console.log(err)
     })
    })

    router.get("/Diary/:id", (req, res) => {
     
             
      Diary.findOne({ _id: req.params.id })
          .then(function(dbDiary) {
              res.json(dbDiary);
          })
          .catch(function(err) {
             console.log(err);
             res.json(err);
          });
  })
  module.exports = router;
