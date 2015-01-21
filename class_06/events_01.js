var EventEmitter = require('events').EventEmitter;

var ee = new EventEmitter();

ee.once('cursando', function(a,b,c) {
  console.log('(once) yo me ejecuto una única vez', a, b, c);
});

ee.on('cursando', function(a,b,c) {
  console.log('(on) alguien esta cursando', a, b, c);
});

ee.addListener('cursando', function(a,b,c) {
  console.log('(addListener) alguien esta cursando', a, b, c);
});

ee.emit('cursando', 'luis', 'pedro', 'lupe');
ee.emit('cursando', 'luis', 'pedro', 'lupe');
ee.emit('cursando', 'luis', 'pedro', 'lupe');
