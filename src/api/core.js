"use strict";

var path = require("path");
var fs = require("fs");

var coress = require("../model/core");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var core = {
    add: function (params, cb) {
        var createData = {
          heading:params.heading,
          url:params.url,
          description: params.description,
          feature: params.feature,
          // alt:params.alt,
          alt: params.alt,
        };
        console.log({params})
    
        if (params.files && params.files.image) {
          var fileName =
            "core" +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/core/" + fileName;
    
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
       
    
        coress.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        coress.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        coress.fetchById(id, function(err, result) {
           if (err) {
                return cb(err);
            }
            return cb(err, result);
        });
    },

    update: function (params, cb) {
      var createData = {
        heading:params.heading,
        url:params.url,
        description: params.description,
        feature: params.feature,
        // priority:params.priority,
        alt: params.alt,
      };
  console.log({params})
      if (params.files && params.files.image) {
        var fileName =
          "core" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/core/" + fileName;
  
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
      coress.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        coress.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
        coress.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = core;