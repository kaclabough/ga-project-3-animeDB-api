const express = require("express");
const router = express.Router();
const animeController = require("../controllers/anime");

router.get("/", animeController.index);
router.get("/id/:id", animeController.findId);
router.post("/new", animeController.create);
router.put("/title/:title", animeController.update);
module.exports = router;
