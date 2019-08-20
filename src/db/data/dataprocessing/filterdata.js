const fs = require("fs");
const animeData = require("./anime.json");

let animes = [];
let animeId = [];

animeData.forEach(anime => {
  if (!animeId.includes(anime.id)) {
    animeId.push(anime.id);
  }
});

animeData.map(anime => {
  if (animeId.includes(anime.id)) {
    let temp = {
      type: anime.type,
      synopsis: anime.attributes.synopsis,
      titles: anime.attributes.titles,
      rating: anime.attributes.averageRating,
      status: anime.attributes.status,
      images: anime.attributes.posterImage,
      episodeCount: anime.attributes.episodeCount
    };
    animes.push(temp);
    let index = animeId.indexOf(anime.id);
    animeId.splice(index, 1);
  }
});

let animeStringified = JSON.stringify(animes);
fs.writeFile(__dirname + "/animeData.json", animeStringified, "utf8", err => {
  if (err) {
    console.log(err);
  } else {
    console.log("wrote to animeData.json");
  }
});
