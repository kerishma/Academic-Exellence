const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/flashCards"
  );
  const flashCardsSeed = {
    words: "",
    Image: "",
    link:  ""
  }
  db.words
  .remove({})
  .then(() => db.words.collection.insertMany(flashCardsSeed))
  .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
  })
  .catch(err => {
      console.error(err);
      process.exit(1);
  });