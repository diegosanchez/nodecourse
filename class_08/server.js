var http = require('http');
var getFBUser = require('./facebook_api.js').getFBUser

var server = http.createServer( handler );
server.listen( 3000 );

function handler(req, res) {
  console.log("request:", req.url );

  function send(data) {
    res.writeHead(200, { 'content-type': 'application/json' } );
    res.end(data + '\n');
  }

  if ( req.method == "GET" ) {
    getFBUser( req.url, function ( person ) {
      send(person);
    });
  };

}

/*
  if ( req.method == "POST" ) {
    req.on("data", function (data) {
      body += data; 
    });

    req.on("end", function() {
      send(body);
      return;
    });
  }
  else {

    res.end("Gracias por la visita");
  }
}
  */
