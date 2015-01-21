var EventEmitter = require('events').EventEmitter;

var ee = new EventEmitter();

ee.addListener( 'enrolled', function () {
  console.log( arguments[0], 'joined the course' );
});

ee.once( 'enrolled', function() {
  console.log('once listener');
});
/*
ee.on('enrolled', function () {
  var students = Array.prototype.slice.call(arguments,0);
  console.log('Students', students.join(', '), '; enrolled.');
});
*/

ee.emit('enrolled', 'yo');
ee.emit('enrolled', 'vos');

