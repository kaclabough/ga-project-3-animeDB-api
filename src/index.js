const express = require("express");
const parser = require("body-parser");
const app = express();

const cors = require("cors");

app.use(parser.json());
app.use(cors());

app.use("/", require("./route/app"));
app.use("/api/anime", require("./route/anime"));

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`listening  on port ${app.get("port")}`);
});
