'use strict';
var request = require('request');
var common = require('./common');
var moment = require('moment');

var awards = {
    add: function(req, res, next) {
        res.render('cms/awards-add.ejs', {
            response: ''
        });
    },

    addPost: function(req, res, next) {             
        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/awards/add', req.headers.cookie, 'POST', req.body, req.files)
            .then((postResult) => {
                res.render('cms/awards-add.ejs', {
                    response: 'success',
                    msg: 'Banner added successfully.'
                });
            }).catch(err => {
                res.render('cms/awards-add.ejs', {
                    response: 'error',
                    msg: err
                });
            });
    },

    manage: function(req, res, next) {

        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/awards', req.headers.cookie, 'GET')
            .then((result) => {
                res.render('cms/awards-manage.ejs', { awards: result,moment: moment });
            }).catch(err => {
                console.log(err);
                res.render('cms/awards-manage.ejs');
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
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/awards/' + req.params.id, req.headers.cookie, 'GET')
        ];

        Promise.all(requestData).then((data) => {
            res.render('cms/awards-edit.ejs', {
               // _csrf: req.csrfToken(),
               awards: data[0],
                response: ''
            });

        }).catch(err => {
            res.render('cms/awards-edit.ejs', {
                response: 'error',
                msg: err
            });
        });
    },

    editPost: function(req, res, next) {
        console.log(req.body, req.files)
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/awards/update', req.headers.cookie, 'POST', req.body, req.files)
        ];
        Promise.all(requestData).then((data) => {
            res.render('cms/awards-edit.ejs', {
                awards: data[0],
                response: 'success',
                msg: 'Updated successfully.'
            });

        }).catch(err => {
           // console.log(err);
            res.render('cms/awards-edit.ejs', {
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
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/awards/delete', req.headers.cookie, 'POST', req.body),
        
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
module.exports = awards;