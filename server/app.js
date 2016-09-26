var express = require("express");
var app = express();

var NODE_PORT = 3000;

app.use("/bower_components", express.static(__dirname + "/../bower_components"))
app.use(express.static(__dirname + "/../client/"));

app.listen(NODE_PORT, function(){
    console.log("Server running at http://localhost:"+NODE_PORT);
});
