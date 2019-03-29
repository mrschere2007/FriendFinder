var express = require("express");
var app = express();
var Port = process.env.PORT || 8080; 
app.use(express.urlencoded({ extended:true}));
app.use(express.json());

// require("./app/routing/htmlRoutes");
// require("./app/routing/apiRoutes");

var htmlRoutes = require("./app/routing/htmlRoutes.js");
app.use(htmlRoutes);

app.listen(Port, function(){
    console.log("App listining on PORT" +Port);
})