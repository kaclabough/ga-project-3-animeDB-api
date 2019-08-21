const User = require("../db/models/User.js");
const config = require("../../config/config");
const passport = require("../../config/passport");
const jwt = require("jwt-simple");

module.exports = {
  index: (req, res) => {
    User.find({}).then(user => {
      res.json(user);
    });
  },

  getbyacc: (req, res) => {
    User.findOne({ email: req.params.email })
      .populate("favorites")
      .then(user => res.json(user));
  },

  signUp: (req, res) => {
    if (req.body.email && req.body.password) {
      let newUser = {
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        favorites: req.body.favorites
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
  },

  login: (req, res) => {
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
  },

  update: (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body).then(user => {
      res.json(user);
    });
  },

  delete: (req, res) => {
    User.findByIdAndDelete(req.params.id).then(deleted => res.send(deleted));
  },
  deleteAll: (req, res) => {
    User.remove({}).then(removeddata => res.send(removeddata));
  }
};
