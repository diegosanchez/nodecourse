var http = require('http');
var util = require('util');

var resources = {};

function find(search, url, cb) {
    var body = "";
    http.get(url+search, function(res){
        res.on('data', function(data){
              body +=data;
        });
        res.on('end', function(){
          console.log(body); 
          cb(body);
        });
    });
};

googleUrl = "http://ajax.googleapis.com/ajax/services/search/%s?v=1.0&q=";

exports.search = function(query, what, cb) {
  var url = util.format(googleUrl, query);
  console.log('url: ', url );
  find( what, url, cb); 
}

