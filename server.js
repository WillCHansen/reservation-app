var express = require("express");

var app = express();
var PORT = 3000;

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

app.get("/", function(req, res) {
  res.send("This is where we send out homepage html file");
});