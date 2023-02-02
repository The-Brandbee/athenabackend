'use strict';
var request = require('request');
var common = require('./common');
var moment = require('moment');

var pluse = {
    add: function(req, res, next) {
        res.render('cms/pluse-add.ejs', {
            response: ''
        });
    },

    addPost: function(req, res, next) {             
        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/pluse/add', req.headers.cookie, 'POST', req.body, req.files)
            .then((postResult) => {
                res.render('cms/pluse-add.ejs', {
                    response: 'success',
                    msg: 'pluse added successfully.'
                });
            }).catch(err => {
                res.render('cms/pluse-add.ejs', {
                    response: 'error',
                    msg: err
                });
            });
    },

    manage: function(req, res, next) {

        common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/pluse', req.headers.cookie, 'GET')
            .then((result) => {
                res.render('cms/pluse-manage.ejs', { pluse: result,moment: moment });
            }).catch(err => {
                console.log(err);
                res.render('cms/pluse-manage.ejs');
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
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/pluse/' + req.params.id, req.headers.cookie, 'GET')
        ];

        Promise.all(requestData).then((data) => {
            res.render('cms/pluse-edit.ejs', {
               // _csrf: req.csrfToken(),
               pluse: data[0],
                response: ''
            });

        }).catch(err => {
            res.render('cms/pluse-edit.ejs', {
                response: 'error',
                msg: err
            });
        });
    },

    editPost: function(req, res, next) {
        var requestData = [
            common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/pluse/update', req.headers.cookie, 'POST', req.body, req.files)
        ];
        Promise.all(requestData).then((data) => {
            res.render('cms/pluse-edit.ejs', {
                pluse: data[0],
                response: 'success',
                msg: 'Updated successfully.'
            });

        }).catch(err => {
           // console.log(err);
            res.render('cms/pluse-edit.ejs', {
                response: 'error',
                msg: err
            });
        });
    },

    deleteplusePost:function(req, res, next) {
         if (!req.body || !req.body.id) {
             return next(ec.appError({
                 status: ec.INVALID_ID,
                 message: "invalid id provided."
             }));
         }
     
         var requestData = [
             common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/pluse/deleteplusedata', req.headers.cookie, 'POST', req.body),
         
         ];
     
         let result = {success: false};
     
         Promise.all(requestData).then((data) => {
             result = {success:true};
     
         }).catch(err => {
             console.log("e:", err)
         });
             res.json(result);
       
     },

     deletePost:function(req, res, next) {
         if (!req.body || !req.body.id) {
             return next(ec.appError({
                 status: ec.INVALID_ID,
                 message: "invalid id provided."
             }));
         }
     
         var requestData = [
             common.apiRequest(req.protocol + '://'  + req.get('host') + '/api/pluse/delete', req.headers.cookie, 'POST', req.body),
         
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
module.exports = pluse;