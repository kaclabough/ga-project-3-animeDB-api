const Anime = require("../db/models/Anime.js");

module.exports = {
  index: (req, res) => {
    Anime.find({}).then(anime => {
      res.json(anime);
    });
  },
  findId: (req, res) => {
    Anime.find({ _id: req.params.id }).then(anime => {
      res.json(anime);
    });
  },
  update: (req, res) => {
    Anime.findAndUpdate({ title: { en: req.params.title } }, req.body).then(
      anime => {
        res.json(anime);
      }
    );
  },
  create: (req, res) => {
    Anime.create(req.body).then(anime => {
      res.json(anime);
    });
  }
};
