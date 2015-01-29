var util = require('util');

var GoogleApi = require('./google_api.js');

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post("/", function(req, res){
    res.json({data: ["hola, soy el dato"] });
});

app.get(/[a-zA-Z]+/, function(req, res){
    var resource = req.path.slice(1);
    var what = req.query.what;
    console.log( 
        util.format('query %s - what: %s', 
            req.path.slice(1), req.query.what
        ) 
    );
    GoogleApi.search( 'images', req.query.what, function (answer) {
        res.json(answer);
    });
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});

