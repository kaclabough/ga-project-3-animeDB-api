const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

router.get("/", userController.index);
router.get("/acc/:email", userController.getbyacc);
router.post("/signup", userController.signUp);
router.post("/login", userController.login);
router.put("/acc/:email", userController.update);
router.delete("/id/:id", userController.delete);
router.delete("/deleteall", userController.deleteAll);

module.exports = router;
