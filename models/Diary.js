const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiarySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: Date.now
  }
});
module.exports = Diary = mongoose.model("diarys", DiarySchema);
