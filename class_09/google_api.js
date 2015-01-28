var http = require('http');
var resources = {};

resources.images = function(search, cb){
    var body = "";
    http.get("http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q="+search, function(res){
        res.on('data', function(data){
              body +=data;
        });
        res.on('end', function(){
          console.log(body); 
          cb(body);
        });
    });
};

resources.blogs = function(search, cb){
    var body = "";
    http.get("http://ajax.googleapis.com/ajax/services/search/blogs?v=1.0&q="+search, function(res){
        res.on('data', function(data){
              body +=data;
        });
        res.on('end', function(){
          console.log(body); 
          cb(body);
        });
    });
};


resources.news = function(search, cb){
    var body = "";
    http.get("http://ajax.googleapis.com/ajax/services/search/news?v=1.0&q="+search, function(res){
        res.on('data', function(data){
              body +=data;
        });
        res.on('end', function(){
          console.log(body); 
          cb(body);
        });
    });
};


exports.search = function(query, what, cb) {
  console.log(what);
  console.log(resources[query]);
  resources[query](what,cb);
}

