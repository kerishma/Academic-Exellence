const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect("mongodb://localhost/flashCards", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let words = [
  {
    words: new word().setword(new word().getword()),
    words: [
      {
        type: "animal",
        name: "Dog",
        Image: "https://i.pinimg.com/originals/01/bc/8d/01bc8d82a3e2b4fa869f478479b97a3f.png"
      }
    ]
  }
];

  db.words.deleteMany({})
  .then(() => db.words.collection.insertMany(wordsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// mongoose.connect(
//     process.env.MONGODB_URI ||
//     "mongodb://localhost/flashCards"
//   );
  // const flashCardsSeed = {
  //   words: "",
  //   Image: "",
  //   link:  ""
  // }
  // db.words
  // .remove({})
  // .then(() => db.words.collection.insertMany(flashCardsSeed))
  // .then(data => {
  //     console.log(data.result.n + " records inserted!");
  //     process.exit(0);
  // })
  // .catch(err => {
  //     console.error(err);
  //     process.exit(1);
  // });