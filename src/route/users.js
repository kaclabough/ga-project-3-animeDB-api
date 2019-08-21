const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

router.get("/", userController.index);
router.get("/id/:id", userController.getbyid);
router.post("/signup", userController.signUp);
router.post("/login", userController.login);
router.put("/id/:id", userController.update);
router.delete("/id/:id", userController.delete);
router.delete("/deleteall", userController.deleteAll);

module.exports = router;
