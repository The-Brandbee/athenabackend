'use strict';

var path = require('path');
var fs = require('fs');

var homeModel = require('../model/home');
var ec = require('../lib/error_consts');
var utils = require('../lib/utils');

var home = {

    fetchAll: function(cb) {

        homeModel.fetchAll(function(err, result) {

            if (err) {
                return cb(err);
            }

            return cb(err, result);
        });
    },
}


module.exports = home;