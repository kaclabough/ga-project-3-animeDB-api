const express = require("express");
const router = express.Router();

router.use("/", require("./app"));
router.use("/api/anime", require("./anime"));

module.exports = router;
