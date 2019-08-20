const mongoose = require("../../connection");

const Schema = mongoose.Schema;

const Anime = new Schema({
  titles: {
    en: String,
    en_jp: String
  },
  type: String,
  synopsis: String,
  rating: Number,
  status: String,
  images: {
    small: String,
    medium: String,
    large: String,
    original: String
  },
  episodeCount: Number
});

module.exports = mongoose.model("Anime", Anime);
