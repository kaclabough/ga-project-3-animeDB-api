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
  updateTitle: (req, res) => {
    Anime.findOneAndUpdate({ title: { en: req.params.title } }, req.body).then(
      anime => {
        res.json(anime);
      }
    );
  },
  updateId: (req, res) => {
    let temp = new Anime();
    console.log(temp);
    Anime.findOneAndUpdate({ _id: req.params.id }, req.body).then(anime => {
      res.json(anime);
    });
  },
  create: (req, res) => {
    Anime.create(req.body).then(anime => {
      console.log(req.body);
      res.json(anime);
    });
  }
};
