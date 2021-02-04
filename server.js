import express, { Router } from "express";
import { connect } from "mongoose";
import pkg from 'body-parser';
const { urlencoded, json } = pkg;
import passport, { initialize } from "passport";
import cors from "cors";
import users from "./routes/api/users.js";
import diarys from "./routes/api/diarys.js";
const app = express();
const diaryRoutes = Router();

app.use(cors());
app.use(
  urlencoded({
    extended: false
  })
);
app.use(json());
// DB Config
import { mongoURI as db } from "./config/keys.js";
// Connect to MongoDB
connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


   diaryRoutes.route("/").get(function (req, res) {
  Diary.find(function (err, diarys) {
  if (err) {
  console.log(err);
      } else {
  res.json(diarys);
      }
    });
  });
   
  diaryRoutes.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Diary.findById(id, function (err, diary) {
  res.json(diary);
    });
  });
   
  diaryRoutes.route("/add").post(function (req, res) {
  let diary = new Diary(req.body);
  diary
      .save()
      .then((diary) => {
  res.status(200).json({ diary:"Diary added successfully" });
      })
      .catch((err) => {
  res.status(400).send("adding new Diary failed");
      });
  });
   
  diaryRoutes.route("/update/:id").post(function (req, res) {
  Diary.findById(req.params.id, function (err, diary) {
  if (!diary) res.status(404).send("data is not found");
  else diary.Diary_title = req.body.diary_title;
  diary.diary_author = req.body.diary_author;
  diary.diary_content = req.body.diary_content;
  diary.diary_category = req.body.diary_category;
   
  diary
        .save()
        .then((diary) => {
         res.json("Diary updated");
        })
        .catch((err) => {
         res.status(400).send("Update not possible");
        });
    });
  }); 
  
  
// Passport middleware
app.use(initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/diarys", diarys);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));