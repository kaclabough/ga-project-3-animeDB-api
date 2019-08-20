const express = require("express");
const jwt = require("jwt-simple");
const passport = require("../../config/passport");
const config = require("../../config/config");
const mongoose = require("../db/models/User");
const User = mongoose.model("User");
const router = express.Router();

router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id).then(deleted => res.send(deleted));
});

router.post("/signup", (req, res) => {
  if (req.body.email && req.body.password) {
    let newUser = {
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    };
    User.findOne({ email: req.body.email }).then(user => {
      if (!user) {
        User.create(newUser).then(user => {
          if (user) {
            var payload = {
              id: newUser.id
            };
            var token = jwt.encode(payload, config.jwtSecret);
            res.json({
              token: token
            });
          } else {
            res.sendStatus(401);
          }
        });
      } else {
        res.sendStatus(401);
      }
    });
  } else {
    res.sendStatus(401);
  }
});

router.post("/login", (req, res) => {
  if (req.body.email && req.body.password) {
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        if (user.password === req.body.password) {
          var payload = {
            id: user.id
          };
          var token = jwt.encode(payload, config.jwtSecret);
          res.json({
            token: token
          });
        } else {
          res.sendStatus(401);
        }
      } else {
        res.sendStatus(401);
      }
    });
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
