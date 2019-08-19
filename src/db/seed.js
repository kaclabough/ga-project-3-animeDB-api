const Anime = require("./models/Anime.js");
const animeData = require("./data/animeData.json");

Anime.remove({})
  .then(anime => Anime.collection.insert(animeData))
  .then(anime => {
    console.log(anime);
  });
