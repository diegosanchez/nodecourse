var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World!');
    console.log(req.query);
});

app.post("/", function(req, res){
    res.json({data: ["hola, soy el dato"] });
    console.log(req.query);
});

app.get("/news", function(req, res){
    var key = req.query.key || "node.js";
   console.log("Quieren buscar noticias sobre: ", key);
    res.send("buscando...");
});

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

});
