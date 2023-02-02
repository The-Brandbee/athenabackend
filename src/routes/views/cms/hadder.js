'use strict';
var request = require('request');
var common = require('./common');
var moment = require('moment');
const needle = require('needle');

var hadder = {
    previewhadder: function(req, res, next) {
        if (!req.params || !req.params.url) {
            return next(ec.appError({
                status: ec.INVALID_ID,
                message: "invalid id provided."
            }));
        }

        var requestData = [
            needle('GET',req.protocol +'://' + req.get('host') + '/api/hadder-preview/' + req.params.url, req.headers.cookie),
            needle('GET',req.protocol +'://' + req.get('host') + '/api/hadder', req.headers.cookie)
        ];

        Promise.all(requestData).then((data) => {
            res.render('web/hadder_detail.ejs', {
               // _csrf: req.csrfToken(),
               hadder: data[0].body,
               allhadder: data[1].body,
                response: ''
            });

        }).catch((err) => {
            console.log({err});
            res.render('web/hadder_detail.ejs', {
                response: 'error',
                msg: err
            });
        });
    },

    add: function(req, res, next) {
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/mainhadder', req.headers.cookie, 'GET')
            ]
            Promise.all(requestData).then((result) => {
                console.log({mainhadder: result[0]})
                    res.render('cms/hadder-add.ejs', { mainhadder: result[0],moment: moment,
                        response: '' });
                }).catch(err => {
                    console.log(err);
                    res.render('cms/hadder-add.ejs',{
                        response: ''});
                });
    },

    addPost: function(req, res, next) {             
        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/hadder/add', req.headers.cookie, 'POST', req.body, req.files)
            .then((postResult) => {
                res.render('cms/hadder-add.ejs', {
                    response: 'success',
                    msg: 'hadder added successfully.'
                });
            }).catch(err => {
                res.render('cms/hadder-add.ejs', {
                    response: 'error',
                    msg: err
                });
            });
    },

    preview: function(req, res, next) {             
        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/preview/hadder', req.headers.cookie, 'POST', req.body, req.files)
            .then((postResult) => {
                res.send({postResult})
                
            }).catch(err => {
                res.render('cms/hadder-add.ejs', {
                    response: 'error',
                    msg: err
                });
            });
    },
    
    manage: function(req, res, next) {

        var requestData = [
        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/hadder', req.headers.cookie, 'GET'),
        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/mainhadder', req.headers.cookie, 'GET')
        ]
        Promise.all(requestData).then((result) => {
                res.render('cms/hadder-manage.ejs', { hadder: result[0],mainhadder: result[1],moment: moment });
            }).catch(err => {
                console.log(err);
                res.render('cms/hadder-manage.ejs');
            });
    },

    edit: function(req, res, next) {
        console.log("edit")
        console.log(req.params.id)

        if (!req.params || !req.params.id) {
            return next(ec.appError({
                status: ec.INVALID_ID,
                message: "invalid id provided."
            }));
        }

        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/hadder/' + req.params.id, req.headers.cookie, 'GET'),
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/mainhadder', req.headers.cookie, 'GET')
        ];

        Promise.all(requestData).then((data) => {
            console.log({hadder: data[0],
                mainhadder: result[1],})
            res.render('cms/hadder-edit.ejs', {
               // _csrf: req.csrfToken(),
               hadder: data[0],
               mainhadder: result[1],
                response: ''
            });

        }).catch(err => {
            res.render('cms/hadder-edit.ejs', {
                response: 'error',
                msg: err
            });
        });
    },

    editPost: function(req, res, next) {
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/hadder/update', req.headers.cookie, 'POST', req.body, req.files)
        ];
        Promise.all(requestData).then((data) => {
            console.log({hadder: data[0],
                mainhadder: result[1],})
            res.render('cms/hadder-edit.ejs', {
                hadder: data[0],
                response: 'success',
                msg: 'Updated successfully.'
            });

        }).catch(err => {
           // console.log(err);
            res.render('cms/hadder-edit.ejs', {
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
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/hadder/delete', req.headers.cookie, 'POST', req.body),
        
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
module.exports = hadder;