'use strict';

var mongoose = require('mongoose');
var ec = require('../lib/error_consts');

var Schema = mongoose.Schema;

var storeSchema = new mongoose.Schema({
    videolink: [{}]
});

var homeModel = mongoose.model('home', storeSchema);


var home = {
    fetchAll: function(cb) {        

        homeModel.find({}, function(err, result) {

            if (err) {
                console.log(err);
                return cb(ec.appError({
                    status: ec.DB_ERROR,
                    message: "DB Fetch Error"
                }));
            }

            return cb(err, result);  
        });
    },
}
module.exports = home;