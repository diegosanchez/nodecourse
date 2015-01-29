var express = require("express");
var app = new express();
var exphbs  = require('express3-handlebars');

persons = [];

persons.push( { name: 'd', age: 10 } );
persons.push( { name: 'e', age: 15 } );
persons.push( { name: 'f', age: 20 } );

app.engine('hbs', exphbs( {extname: '.hbs'}));
app.set('view engine', 'hbs');


app.set('views', './views');

app.get("/", function(req, res, next){

    res.render("index", {
        today: new Date()
    });

});

app.get("/add", function(req, res, next){
    res.render("post");
});

app.get("/save", function(req, res, next){
    console.log("Saving posts -  query", req.query);
    res.redirect("/");
});

app.post("/save", function(req, res, next){
    console.log("Saving posts -  query", req.query);
    res.redirect("/");
});

app.get("/users", function(req, res, next){

    res.render("users", {
        persons: persons
    });

});


var server = app.listen(3000, function () {
    console.log('Server creado');
});

