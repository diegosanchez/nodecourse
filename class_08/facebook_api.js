var http = require('http');

exports.getFBUser = function (username, cb) {
  var url = 'http://graph.facebook.com/' + username;
  http.get(url, function (res) { 
      var data = "";
      if ( res.statusCode != 200 ) {
        return cb( undefined, res.statusCode);
      }

      res.on('data', function (d) {
          data += d;
      });

      res.on('end', function () {
        return cb( data, res.statusCode);
      });
  });
}


