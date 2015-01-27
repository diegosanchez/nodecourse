var http = require('http');
var fs = require('fs');

var url =  process.argv[2]  || 'http://graph.facebook.com/pepe.luis';

var file = 'index.html';

function getFBUser(username) {
  var url = 'http://graph.facebook.com/' + username;
  http.get(url, function (res) { 
      var data = "";
      if ( res.statusCode != 200 ) {
        console.error( "Ha ocurrido eehrror:", res.statusCode);
        return ;
      }

      res.on('data', function (d) {
          data += d;
      });

      res.on('end', function () {
        fs.writeFile(username + '.json', data );
      });
  });
}


process.argv.slice(2).forEach( function (e) {
  console.warn('Retriving', e );
  getFBUser(e);
});
