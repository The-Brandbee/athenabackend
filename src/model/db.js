'use strict';

var mongoose = require('mongoose');
var config = require('../config/config');


var dburl = 'mongodb+srv://athena-vulcan:mYplqnc78hVdr3C8@florence.wxcox.mongodb.net/athenaSite';

mongoose.connect(dburl, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
    
});

mongoose.Promise = require('bluebird');


mongoose.connection.on('connected', function() {
    console.log('MongoDb Connected');
});

mongoose.connection.on('error', function(err) {
    console.log('MongoDb connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('MongoDb disconnected');
});


// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
function gracefulShutdown(msg, callback) {
    mongoose.connection.close(function() {
        console.log('MongoDb disconnected through ' + msg);
        callback();
    });
}

// For nodemon restarts
process.once('SIGUSR2', function() {
    gracefulShutdown('App restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// For app termination
process.on('SIGINT', function() {
    gracefulShutdown('App termination (SIGINT)', function() {
        process.exit(0);
    });
});

// For Heroku app termination
process.on('SIGTERM', function() {
    gracefulShutdown('App termination (SIGTERM)', function() {
        process.exit(0);
    });
});