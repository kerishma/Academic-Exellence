const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wordsSchema = new Schema({
    _id: { type: String },
    words: { type: String },

});

const words = mongoose.model("words", wordsSchema);

module.exports = words;