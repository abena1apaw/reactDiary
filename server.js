const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const users = require("./routes/api/users");
const Diarys = require("./routes/api/diarys");
const app = express();
const DiaryRoutes = express.Router();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


   DiaryRoutes.route("/").get(function (req, res) {
  Diary.find(function (err, Diarys) {
  if (err) {
  console.log(err);
      } else {
  res.json(Diarys);
      }
    });
  });
   
  DiaryRoutes.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Diary.findById(id, function (err, Diary) {
  res.json(Diary);
    });
  });
   
  DiaryRoutes.route("/add").post(function (req, res) {
  let Diary = new Diary(req.body);
  Diary
      .save()
      .then((Diary) => {
  res.status(200).json({ Diary:"Diary added successfully" });
      })
      .catch((err) => {
  res.status(400).send("adding new Diary failed");
      });
  });
   
  DiaryRoutes.route("/update/:id").post(function (req, res) {
  Diary.findById(req.params.id, function (err, Diary) {
  if (!Diary) res.status(404).send("data is not found");
  else Diary.Diary_title = req.body.Diary_title;
  Diary.Diary_author = req.body.Diary_author;
  Diary.Diary_content = req.body.Diary_content;
  Diary.Diary_category = req.body.Diary_category;
   
  Diary
        .save()
        .then((Diary) => {
         res.json("Diary updated");
        })
        .catch((err) => {
         res.status(400).send("Update not possible");
        });
    });
  }); 
  
  
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/Diarys", Diarys);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));