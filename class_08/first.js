var http = require('http');
var fs = require('fs');

var url =  process.argv[2]  || 'http://nodejs.org';

var file = 'index.html';

/*
http.get(url, function (res) { 
    if ( res.statusCode != 200 ) {
      console.error( "Ha ocurrido eehrror:", res.statusCode);
      return ;
    }

    fs.unlink( file, function () {
      res.on('data', function (d) {
        fs.writeFile( file, d, { flag: 'a' });
      });
    } ); 
});
*/

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
      fs.writeFile( file, data);
    });
});
