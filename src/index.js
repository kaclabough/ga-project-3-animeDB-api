const express = require("express");
const parser = require("body-parser");
const passport = require("../config/passport")();
const cors = require("cors");
const userController = require("./controllers/users");
const app = express();

app.use(parser.json());
app.use(passport.initialize());
app.use(cors());

app.use("/", require("./route/index"));

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`listening  on port ${app.get("port")}`);
});
