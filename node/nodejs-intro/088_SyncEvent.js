var events = require('events');
var util = require('util');
function SyncEmitter() {
    this.emit('bar');
}
util.inherits(SyncEmitter, events.EventEmitter);
var foo = new SyncEmitter();

// isn't called
foo.on('bar', function() {
    console.log('bar event emitter');
});