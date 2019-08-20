const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

router.post("/signup", userController.signUp);
router.post("/login", userController.login);
router.put("/id/:id", userController.update);
router.delete("/id/:id", userController.delete);

module.exports = router;
