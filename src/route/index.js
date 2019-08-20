const express = require("express");
const router = express.Router();

router.use("/", require("./app"));
router.use("/api/anime", require("./anime"));
router.use("/api/users", require("./users"));

module.exports = router;
