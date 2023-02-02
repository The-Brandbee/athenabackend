"use strict";

const { Validator } = require("node-input-validator");
var _ = require("underscore");

var hadderApi = require("../../api/hadder");
var ec = require("../../lib/error_consts");
var hadder = {
    add: async function (req, res, next) {
        
    console.log("async function")
        
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

          var validImg2 = new Validator(req.files.hadderimage);
          var imgMatched = await validImg2.check();
          if (!imgMatched) {
            var errMsg = "";
            for (var key in validImg2.errors) {
              errMsg += validImg2.errors[key].message + " ";
            }
            return next(
              ec.appError({
                status: ec.INVALID_DATA,
                message: errMsg,
              })
            );
          }

          var validImg3 = new Validator(req.files.hadderdetailsimage);
          var imgMatched = await validImg3.check();
          if (!imgMatched) {
            var errMsg = "";
            for (var key in validImg3.errors) {
              errMsg += validImg3.errors[key].message + " ";
            }
            return next(
              ec.appError({
                status: ec.INVALID_DATA,
                message: errMsg,
              })
            );
          }

          
          var validImg4 = new Validator(req.files.homebanner);
          var imgMatched = await validImg4.check();
          if (!imgMatched) {
            var errMsg = "";
            for (var key in validImg4.errors) {
              errMsg += validImg4.errors[key].message + " ";
            }
            return next(
              ec.appError({
                status: ec.INVALID_DATA,
                message: errMsg,
              })
            );
          }
        }
    
        hadderApi.add(req.body, function (err, data) {
          if (err) {
            return next(err);
          }
          console.log({data})
          res.json(data);
        });
      },


      preview:async function (req, res, next) {
        
    
        
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

          var validImg2 = new Validator(req.files.hadderimage);
          var imgMatched = await validImg2.check();
          if (!imgMatched) {
            var errMsg = "";
            for (var key in validImg2.errors) {
              errMsg += validImg2.errors[key].message + " ";
            }
            return next(
              ec.appError({
                status: ec.INVALID_DATA,
                message: errMsg,
              })
            );
          }

        }
    
        hadderApi.addpreview(req.body, function (err, data) {
          if (err) {
            return next(err);
          }
          res.json(data);
        });
      },

      fetchAll: function (req, res, next) {
        hadderApi.fetchAll(function (err, data) {
            if (err) {
              return next(err);
            }
      
            res.json(data);
          });
     },

     fetchById: function(req, res, next) {
         console.log("fetchById")
         console.log(req.params.id)
      if (!req.params || !req.params.id) {
          return next(ec.appError({
              status: ec.INVALID_ID,
              message: "invalid id provided."
          }));
      }
  
      hadderApi.fetchById(req.params.id, function(err, data) {
  
          if (err) {
              return next(err);
          }
          res.json(data);
      });
    },

    fetchByUrl:function(req, res, next) {
      if (!req.params || !req.params.url) {
          return next(ec.appError({
              status: ec.INVALID_ID,
              message: "invalid id provided."
          }));
      }
  
      hadderApi.fetchByUrl(req.params.url, function(err, data) {
  
          if (err) {
              return next(err);
          }
          res.json(data);
      });
    },

    fetchPreviewbyUrl:function(req, res, next) {
      if (!req.params || !req.params.url) {
          return next(ec.appError({
              status: ec.INVALID_ID,
              message: "invalid id provided."
          }));
      }
  
      hadderApi.fetchPreviewbyUrl(req.params.url, function(err, data) {
  
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

        var validImg2 = new Validator(req.files.hadderimage);
        var imgMatched = await validImg2.check();
        if (!imgMatched) {
          var errMsg = "";
          for (var key in validImg2.errors) {
            errMsg += validImg2.errors[key].message + " ";
          }
          return next(
            ec.appError({
              status: ec.INVALID_DATA,
              message: errMsg,
            })
          );
        }

        var validImg3 = new Validator(req.files.hadderdetailsimage);
        var imgMatched = await validImg3.check();
        if (!imgMatched) {
          var errMsg = "";
          for (var key in validImg3.errors) {
            errMsg += validImg3.errors[key].message + " ";
          }
          return next(
            ec.appError({
              status: ec.INVALID_DATA,
              message: errMsg,
            })
          );
        }

        
        var validImg4 = new Validator(req.files.homebanner);
        var imgMatched = await validImg4.check();
        if (!imgMatched) {
          var errMsg = "";
          for (var key in validImg4.errors) {
            errMsg += validImg4.errors[key].message + " ";
          }
          return next(
            ec.appError({
              status: ec.INVALID_DATA,
              message: errMsg,
            })
          );
        }
      }
  
      hadderApi.update(params, function (err, data) {
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
      hadderApi.deleteDataId({ id: req.body.id}, function(err, data) {
  
          if (err) {
              return next(err);
          }
          res.json(data);
      });
  },
};
module.exports = hadder;