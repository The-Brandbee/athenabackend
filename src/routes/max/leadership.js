"use strict";

const { Validator } = require("node-input-validator");
var _ = require("underscore");

var leadershipApi = require("../../api/leadership");
var ec = require("../../lib/error_consts");
var leadership = {
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
    
        leadershipApi.add(req.body, function (err, data) {
          if (err) {
            return next(err);
          }
          res.json(data);
        });
      },

      fetchAll: function (req, res, next) {
        leadershipApi.fetchAll(function (err, data) {
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
  
      leadershipApi.fetchById(req.params.id, function(err, data) {
  
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
  
      leadershipApi.update(params, function (err, data) {
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
      leadershipApi.deleteId({ id: req.body.id}, function(err, data) {
  
          if (err) {
              return next(err);
          }
          res.json(data);
      });
  },
};
module.exports = leadership;