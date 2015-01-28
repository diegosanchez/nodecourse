var http = require('http');
var url = require('url');
var GoogleApi = require('./google_api');

http.createServer(function (req, res) {

    (function(url){
        req.query = {};

        if(url.indexOf("?")==-1) return false;

        url = url.replace("?", "");
        url = url.split("/").join("");

        var pars  = url.split("&");

        for(var x=0; x<pars.length; x++){
            var kv = pars[x].split("=");
            req.query[kv[0]] = kv[1];
        }//end for

    })(req.url);


    var send = function(str){
        console.log("Nuevo pedido: ", req.url);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(str+'\n');

    };

    console.log(req.query);
    if ( req.query.hasOwnProperty('tipo') ) {

      GoogleApi.search(req.query.tipo, req.query.consulta, function(json){
          send(json);
      });
    }


}).listen(1234);

console.log('Servidor corriendo en el puerto 1234');

