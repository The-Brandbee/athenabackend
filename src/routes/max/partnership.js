"use strict";

const { Validator } = require("node-input-validator");
var _ = require("underscore");

var aboutApi = require("../../api/partnership");
var ec = require("../../lib/error_consts");
var partnership = {
    add: async function (req, res, next) {
        
    
        
        if (!req.body) {
            return next(ec.appError({
                status: ec.UNDEFINED_DATA,
                message: "no data provided."
            }));
        }
    
        var params = req.body;
    
        params["user"] = req.user.id;
    
        if (req.files) {
          params["files"] = req.files;
    
          var validImg1 = new Validator(req.files.image);
          var imgMatched = await validImg1.check();
          if (!imgMatched) {
            var errMsg = "";
            for (var key in validImg1.errors) {
              errMsg += validImg1.errors[key].message + " ";
            }
            return next(
              ec.appError({
                status: ec.INVALID_DATA,
                message: errMsg,
              })
            );
          }

        
        }
    
        aboutApi.add(req.body, function (err, data) {
          if (err) {
            return next(err);
          }
          res.json(data);
        });
      },

      fetchAll: function (req, res, next) {
        aboutApi.fetchAll(function (err, data) {
            if (err) {
              return next(err);
            }
      
            res.json(data);
          });
     },

     fetchById: function(req, res, next) {
      if (!req.params || !req.params.id) {
          return next(ec.appError({
              status: ec.INVALID_ID,
              message: "invalid id provided."
          }));
      }
  
      aboutApi.fetchById(req.params.id, function(err, data) {
  
          if (err) {
              return next(err);
          }
          res.json(data);
      });
    },

    update: async function (req, res, next) {
      if (!req.user) {
        return next(
          ec.appError({
            status: ec.UNAUTHORIZED_ACCESS,
            message: "user not logged in.",
          })
        );
      }
  
      if (!req.user.role === "ADMINISTRATOR") {
        return next(
          ec.appError({
            status: ec.UNAUTHORIZED_ACCESS,
            message: "user is not admin.",
          })
        );
      }
  
      if (!req.body) {
        return next(
          ec.appError({
            status: ec.UNDEFINED_DATA,
            message: "no data provided.",
          })
        );
      }
  
  
      var params = req.body;
      params["user"] = req.user.id;
  
      if (req.files) {
        params["files"] = req.files;
  
        var validImg1 = new Validator(req.files.image);
        var imgMatched = await validImg1.check();
        if (!imgMatched) {
          var errMsg = "";
          for (var key in validImg1.errors) {
            errMsg += validImg1.errors[key].message + " ";
          }
          return next(
            ec.appError({
              status: ec.INVALID_DATA,
              message: errMsg,
            })
          );
        }

        
      }
  
      aboutApi.update(params, function (err, data) {
        if (err) {
          return next(err);
        }
        res.json(data);
      });
    },

    delete:  function(req, res, next) {
      if (!req.body || !req.body.id) {
          return next(ec.appError({
              status: ec.INVALID_ID,
              message: "invalid id provided."
          }));
      }
      aboutApi.deleteId({ id: req.body.id}, function(err, data) {
  
          if (err) {
              return next(err);
          }
          res.json(data);
      });
  },
};
module.exports = partnership;