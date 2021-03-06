var http = require('http');
var util = require('util');

var resources = {};

var googleUrl = "http://ajax.googleapis.com/ajax/services/search/%s?v=1.0&q=";

function find(what, url, cb) {
    var body = "";
    http.get(url+search, function(res){
        res.on('data', function(data){
              body +=data;
        });
        res.on('end', function(){
          cb(body);
        });
    });
}

exports.search = function( type, what, cb) {
  var url = util.format(googleUrl, type);
  find( what, url, cb); 
};

