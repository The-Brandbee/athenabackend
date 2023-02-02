"use strict";

var path = require("path");
var fs = require("fs");

var mainhadderModel = require("../model/mainhadder");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var mainhadder = {
    add: function (params, cb) {
        var createData = {
          heading:params.heading,
          url:params.url,
        //   description: params.description,
        //   home_description: params.home_description,
          // alt:params.alt,
          alt: params.alt,
        };
        console.log({params})
    
        if (params.files && params.files.image) {
          var fileName =
            "mainhadder" +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/mainhadder/" + fileName;
    
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
       
    
          mainhadderModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        mainhadderModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        mainhadderModel.fetchById(id, function(err, result) {
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
        // description: params.description,
        // home_description: params.home_description,
        // priority:params.priority,
        alt: params.alt,
      };
  console.log({params})
      if (params.files && params.files.image) {
        var fileName =
          "mainhadder" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/mainhadder/" + fileName;
  
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
      mainhadderModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        mainhadderModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      mainhadderModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = mainhadder;