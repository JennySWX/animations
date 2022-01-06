const EventEmitter = require('events')
var url = 'heep://mylogger.io.log'

// define a class 
class Logger extends EventEmitter {
    
    // a method
    log(msg) {
        // Send a HTTP request
        console.log(msg);
    
        // Raise Event
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}


// Logger class
module.exports = Logger;