var express = require("express");
var app = express();

app.get("/user/:id", (req, res) => {
  res.status(200).send("OK");
});

app.listen(3000);