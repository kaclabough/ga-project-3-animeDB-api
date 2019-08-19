const mongoose = require("mongoose");

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/anime-api";
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(instance =>
    console.log(`connected to db: ${instance.connections[0].name}`)
  )
  .catch(error => console.log("connection failed!\n", error));

mongoose.Promise = Promise;

module.exports = mongoose;
