var events = require('events');

var emiter = new events.EventEmitter();

emiter.on('someEvent', function(arg1, arg2) {
    console.log('listener1', arg1, arg2);
});

emiter.on('someEvent', function(arg1, arg2) {
    console.log('listener2', arg1, arg2);
});

emiter.emit('someEvent', 'byvoid', 1991);