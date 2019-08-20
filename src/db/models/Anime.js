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
    tiny: String,
    small: String,
    medium: String,
    large: String,
    original: String,
    meta: {
      dimensions: {
        tiny: {
          width: Number,
          height: Number
        },
        small: {
          width: Number,
          height: Number
        },
        medium: {
          width: Number,
          height: Number
        },
        large: {
          width: Number,
          height: Number
        }
      }
    }
  },
  episodeCount: Number
});

module.exports = mongoose.model("Anime", Anime);
