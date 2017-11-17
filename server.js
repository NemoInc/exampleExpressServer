var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
    res.send(JSON.stringify("hello github field day"));
  });

var server = app.listen(3000, function () {
  console.log("Listening on port %s", server.address().port);
});
