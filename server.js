var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/make", function(req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/tables", function(req, res) {
	return res.json(tables)
});

var tables = [
	{
		name: "david",
		phone: 911,
		email: "sekc@gmail",
		id: 1
	},
	{
		name: "Blake",
		phone: 912,
		email: "Blake@gmail",
		id: 2
	}
];

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

app.get("/", function(req, res) {
  res.send("This is where we send out homepage html file");
});