var express = require("express");
var app = express();

app.use(require("./lib/logger.js"));

app.get("/", (req, res) => {
  res.status(200).send("Hello World.");
});

app.listen(3000);
