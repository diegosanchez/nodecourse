var express = require('express');
var exphbs  = require('express-handlebars');
var mongojs = require('mongojs');

var imdbClass = require("./imdb");
var imdbCtrl = new imdbClass();

var db = mongojs('imdb', ['movies']);

var work = function() {
  imdbCtrl.getNewMovies(function(movies){
    console.log('Retriving movies from imdb...');
    movies.forEach( function(e) {
        e.created = new Date();
        db.movies.save(e);
    });
  });
};

setTimeout(work, 0);
setInterval(work, 50000);

var app = express();

app.engine('hbs', exphbs( {
  defaultLayout: 'layout',
  extname: '.hbs'
}));
app.set('view engine', 'hbs');


app.set('views', './views');

app.get("/", function(req, res, next){

    db.movies.find( {}, {}, function(err, movies) {
      res.render('index', {
        movies: movies
      });
    });

});


var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);


});

