const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const { MONGODB_URI } = require("./keys");
require("./models/user")

// const PORT = process.env.PORT || 3001;
const PORT = 3000;
const app = express();


app.use(express.json());
app.use(require("./routes/auth"))
// Define middleware here
app.use(express.urlencoded({ extended: true }));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// app.use(routes)

// Connect to the Mongo DB
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


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});