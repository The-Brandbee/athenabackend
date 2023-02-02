"use strict";

var path = require("path");
var fs = require("fs");

var staticcontentModel = require("../model/staticcontent");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var staticcontent = {
    add: function (params, cb) {
        var createData = {
          heading:params.heading,
        //   url:params.url,
          description: params.description,
          home_description: params.home_description,
          // alt:params.alt,
          alt: params.alt,
        };
        console.log({params})
    
        if (params.files && params.files.image) {
          var fileName =
            "staticcontent" +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/staticcontent/" + fileName;
    
          fs.writeFile(filePath, params.files.image.data, function (
            err,
            written
          ) {
            if (err) {
              console.log("Error in uploading icon." + err);
            }
          });
    

        createData["image"] = filePath;
        }
       
    
          staticcontentModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        staticcontentModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        staticcontentModel.fetchById(id, function(err, result) {
           if (err) {
                return cb(err);
            }
            return cb(err, result);
        });
    },

    update: function (params, cb) {
      var createData = {
        heading:params.heading,
        // url:params.url,
        description: params.description,
        home_description: params.home_description,
        // priority:params.priority,
        alt: params.alt,
      };
  console.log({params})
      if (params.files && params.files.image) {
        var fileName =
          "staticcontent" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/staticcontent/" + fileName;
  
        fs.writeFile(filePath, params.files.image.data, function (
          err,
          written
        ) {
          if (err) {
            console.log("Error in uploading icon." + err);
          }
        });

        createData["image"] = filePath;
      }
    
  
      console.log({createData})
      staticcontentModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        staticcontentModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      staticcontentModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = staticcontent;