 const EventEmitter = require('events')

// get a class from require function
const Logger = require('./logger')
const logger = new Logger();

//register a listener
emitter.on('msg logged', (arg) => {
    console.log('Listener called', arg);
});

loger.log('message');