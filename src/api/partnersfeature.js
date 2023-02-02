"use strict";

var path = require("path");
var fs = require("fs");

var aboutModel = require("../model/partnersfeature");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var partnersfeature = {
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
            "partnersfeature" +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/partnersfeature/" + fileName;
    
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
       
    
          aboutModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        aboutModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        aboutModel.fetchById(id, function(err, result) {
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
          "partnersfeature" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/partnersfeature/" + fileName;
  
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
      aboutModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        aboutModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      aboutModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = partnersfeature;