// create object
var events = require('events');
var emitter = new events.EventEmitter();

// create listener
var sampleListener = function(arg1) {
    console.log(arg1);
}

// bind event
emitter.on('occurrence', sampleListener);

// event
emitter.emit('occurrence', 'occured!');

// bind only one event
emitter.once('occurrence_once', function() {
    console.log('only this time!');
});

// only one event
emitter.emit('occurrence_once');

emitter.emit('occurrence_once'); // nothing happen
