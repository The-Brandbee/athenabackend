'use strict';
var request = require('request');
var common = require('./common');
var moment = require('moment');

var corporate = {
    add: function(req, res, next) {
        res.render('cms/corporate-add.ejs', {
            response: ''
        });
    },

    addPost: function(req, res, next) {             
        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/corporate/add', req.headers.cookie, 'POST', req.body, req.files)
            .then((postResult) => {
                res.render('cms/corporate-add.ejs', {
                    response: 'success',
                    msg: 'Banner added successfully.'
                });
            }).catch(err => {
                res.render('cms/corporate-add.ejs', {
                    response: 'error',
                    msg: err
                });
            });
    },

    manage: function(req, res, next) {

        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/corporate', req.headers.cookie, 'GET')
            .then((result) => {
                res.render('cms/corporate-manage.ejs', { corporate: result,moment: moment });
            }).catch(err => {
                console.log(err);
                res.render('cms/corporate-manage.ejs');
            });
    },

    edit: function(req, res, next) {
        if (!req.params || !req.params.id) {
            return next(ec.appError({
                status: ec.INVALID_ID,
                message: "invalid id provided."
            }));
        }

        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/corporate/' + req.params.id, req.headers.cookie, 'GET')
        ];

        Promise.all(requestData).then((data) => {
            res.render('cms/corporate-edit.ejs', {
               // _csrf: req.csrfToken(),
               corporate: data[0],
                response: ''
            });

        }).catch(err => {
            res.render('cms/corporate-edit.ejs', {
                response: 'error',
                msg: err
            });
        });
    },

    editPost: function(req, res, next) {
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/corporate/update', req.headers.cookie, 'POST', req.body, req.files)
        ];
        Promise.all(requestData).then((data) => {
            res.render('cms/corporate-edit.ejs', {
                corporate: data[0],
                response: 'success',
                msg: 'Updated successfully.'
            });

        }).catch(err => {
           // console.log(err);
            res.render('cms/corporate-edit.ejs', {
                response: 'error',
                msg: err
            });
        });
    },

    deletePost:function(req, res, next) {
        if (!req.body || !req.body.id) {
            return next(ec.appError({
                status: ec.INVALID_ID,
                message: "invalid id provided."
            }));
        }
    
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/corporate/delete', req.headers.cookie, 'POST', req.body),
        
        ];
    
        let result = {success: false};
    
        Promise.all(requestData).then((data) => {
            result = data;
    
        }).catch(err => {
            console.log("e:", err)
        });
    
            res.json({success: true});
      
    },
};
module.exports = corporate;