var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())


app.get("/", function(req, res) {
    res.json({"message": "hello github field day"});
  });

var server = app.listen(3000, function () {
  console.log("Listening on port %s", server.address().port);
});
