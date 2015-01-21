var fs = require('fs');

var messages = [];

function log() {
  var _args = Array.prototype.slice.call(arguments,0);
  messages.push( _args.join(' ') );
}

function writeLog() {
  createFile('out.log', messages.join('\n') );
}

function createDir(name, cb) {
  var _mkdir = function(name, cb2) {
    fs.mkdir( name, function(err) {
      if (err) throw err;

      cb2();
    });
  };

  fs.exists(name, function(exist) {
    if ( exist ) {
      log('Borrando directory:', name);
      fs.rmdir(name, function(err) {
        log('Creando directory:', name);
        _mkdir(name, cb);
      });
    }
    else {
      log('Creando directory:', name);
      _mkdir(name, cb);
    }
  });
}

function createFile(name, data, cb) {
  var _writeCb = function (err) {
    if (err) throw err;

    log('Archivo:', name, 'creado');

    cb();
  }

  fs.exists(name, function(exist) {
    if ( exist ) {
      log('Borrando archivo:', name);
      fs.unlink( name, function (err) {
        if (err) throw err;

        log('Archivo:', name, 'borrado.');
        fs.writeFile(name, data, cb);

      });
    }
    else {
      log('Archivo:', name, 'creado');
      fs.writeFile(name, data, cb);
    }
  });
}

createDir('prueba', function() {
  createFile('prueba.txt', 'contenido', function(err) {
    writeLog();
  })
});
