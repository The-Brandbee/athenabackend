'use strict';
var request = require('request');
var common = require('./common');
var moment = require('moment');

var leadershippage = {
    add: function(req, res, next) {
        res.render('cms/ourleadership-add.ejs', {
            response: ''
        });
    },

    addPost: function(req, res, next) {             
        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/leadershippage/add', req.headers.cookie, 'POST', req.body, req.files)
            .then((postResult) => {
                res.render('cms/ourleadership-add.ejs', {
                    response: 'success',
                    msg: 'Banner added successfully.'
                });
            }).catch(err => {
                res.render('cms/ourleadership-add.ejs', {
                    response: 'error',
                    msg: err
                });
            });
    },

    manage: function(req, res, next) {

        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/leadershippage', req.headers.cookie, 'GET')
            .then((result) => {
                res.render('cms/ourleadership-manage.ejs', { leadershippage: result,moment: moment });
            }).catch(err => {
                console.log(err);
                res.render('cms/ourleadership-manage.ejs');
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
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/leadershippage/' + req.params.id, req.headers.cookie, 'GET')
        ];

        Promise.all(requestData).then((data) => {
            res.render('cms/ourleadership-edit.ejs', {
               // _csrf: req.csrfToken(),
               leadershippage: data[0],
                response: ''
            });

        }).catch(err => {
            res.render('cms/ourleadership-edit.ejs', {
                response: 'error',
                msg: err
            });
        });
    },

    editPost: function(req, res, next) {
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/leadershippage/update', req.headers.cookie, 'POST', req.body, req.files)
        ];
        Promise.all(requestData).then((data) => {
            res.render('cms/ourleadership-edit.ejs', {
                leadershippage: data[0],
                response: 'success',
                msg: 'Updated successfully.'
            });

        }).catch(err => {
           // console.log(err);
            res.render('cms/ourleadership-edit.ejs', {
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
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/leadershippage/delete', req.headers.cookie, 'POST', req.body),
        
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
module.exports = leadershippage;