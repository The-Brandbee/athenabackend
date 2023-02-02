'use strict';

const { Validator } = require('node-input-validator');
var _ = require('underscore');

var homeApi = require('../../api/home');
var ec = require('../../lib/error_consts');

var home = {
    fetchAll: function(req, res, next) {

        homeApi.fetchAll(function(err, data) {

            if (err) {
                return next(err);
            }
            res.json(data);
        });
    },

};
module.exports = home;