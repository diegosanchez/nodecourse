var fs = require('fs');

fs.writeFile('prueba.txt', 'Estoy en el curso de node', function (err) {
  if (err) throw err;

  console.log('Archivo guardado');
});

var cb = function(e, d) {
  if ( e) throw e;

  console.log('Creado:', d);
}

fs.mkdir( 'pruebas', cb );
fs.mkdir( 'pruebas/a', cb );
fs.mkdir( 'pruebas/b', cb );
fs.mkdir( 'pruebas/c', cb );
fs.mkdir( 'pruebas/d', cb );
