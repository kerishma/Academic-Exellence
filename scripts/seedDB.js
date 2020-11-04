const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
      process.env.MONGODB_URI ||
      "mongodb://localhost/words"
    );
// mongoose.connect("mongodb://localhost/flashCards", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });
 
const wordSeed = [
  // {
  const unirest = require("unirest");
  const req = unirest("GET", "https://rapidapi.p.rapidapi.com/word_of_day");

  req.headers({
	"x-rapidapi-key": "0fc2d0a77cmshbe792af71542bf5p134800jsn3fa7dd925eba",
	"x-rapidapi-host": "englishapi.p.rapidapi.com",
	"useQueryString": true
  }),

  var unirest = require("unirest");

  var req = unirest("GET", "https://rapidapi.p.rapidapi.com/words/hatchback/typeOf");

  req.headers({
	"x-rapidapi-key": "0fc2d0a77cmshbe792af71542bf5p134800jsn3fa7dd925eba",
	"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
	"useQueryString": true
  });


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});



// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });
  // },
  //   {
  //   words: "Dog",
  //   Image: "https://i.pinimg.com/originals/01/bc/8d/01bc8d82a3e2b4fa869f478479b97a3f.png"
  // },
  // {
  //   words: "Cat",
  //   Image: "https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg"
  // },
  // {
  //   words: "Hand",
  //   Image: "https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg"
  // },

  db.word
  .remove({})
  .then(() => db.word.collection.insertMany(wordSeed))
  .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
  })
  .catch(err => {
      console.error(err);
      process.exit(1);
  });


//   {
//     words: new word().setword(new word().getword()),
//     words: [
//       {
//         type: "animal",
//         name: "Dog",
//         Image: "https://i.pinimg.com/originals/01/bc/8d/01bc8d82a3e2b4fa869f478479b97a3f.png"
//       }
//     ]
//   }
// ];

//   db.words.deleteMany({})
//   .then(() => db.words.collection.insertMany(wordsSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

// mongoose.connect(
//     process.env.MONGODB_URI ||
//     "mongodb://localhost/flashCards"
//   );
//   const flashCardsSeed = {
//     words: "",
//     Image: "",
//     link:  ""
//   }
//   db.words
//   .remove({})
//   .then(() => db.words.collection.insertMany(flashCardsSeed))
//   .then(data => {
//       console.log(data.result.n + " records inserted!");
//       process.exit(0);
//   })
//   .catch(err => {
//       console.error(err);
//       process.exit(1);
//   })