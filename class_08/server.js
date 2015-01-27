var http = require('http');

var server = http.createServer( handler );


server.listen( 3000 );

function handler(req, res) {
  console.log("request:", req.url );

  function send(data) {
    res.writeHead(200, { 'content-type': 'application/json' } );
    res.end(data + '\n');
  }

  var url = 'http://graph.facebook.com' + req.url;

  if ( req.method == "GET" ) {
    http.get(url, function (resFb) { 
      var faceBookResponse = "";
      resFb.on('data', function (d) {
          faceBookResponse += d;
      });

      resFb.on('end', function () {
        send(faceBookResponse);
      });
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
