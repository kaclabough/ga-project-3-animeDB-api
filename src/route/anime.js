const express = require("express");
const router = express.Router();
const animeController = require("../controllers/anime.js");

router.get("/", animeController.index);

module.exports = router;
