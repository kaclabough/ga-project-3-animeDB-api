const mongoose = require("../../connection");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: String,
  password: String,
  email: String,
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Anime" }],
  currentlyWatching: [{ type: mongoose.Schema.Types.ObjectId, ref: "Anime" }]
});

module.exports = mongoose.model("User", UserSchema);
