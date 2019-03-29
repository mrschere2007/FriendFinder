var path = require("path");

module.exports =  function(app){
    app.get("/survey", function(req, res){
        console.log("inside survey route");
        res.senddFile(path.join(__dirname,"/..public/survey.html"));
    })
    app.get("/", function(req, res){
        console.log("inside home route");
        res.senddFile(path.join(__dirname,"/..public/home.html"));
    })
    
}