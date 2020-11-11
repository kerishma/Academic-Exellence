const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const path = require("path");
const { MONGODB_URI } = require("./keys");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/flashCards", { useNewUrlParser: true });
mongoose.connect(MONGODB_URI,
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

mongoose.connection.on("connected", () => {
  console.log("mongoose is connected to mongoDB")
})

mongoose.connection.on("error", () => {
  console.log("error connecting mongoose to MongoDB")
})

require("./models/user")
app.use(express.json());
app.use(require('./routes/auth'))

// Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});