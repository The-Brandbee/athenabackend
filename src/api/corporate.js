"use strict";

var path = require("path");
var fs = require("fs");

var corporateModel = require("../model/corporate");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");



var corporate = {
    add: function (params, cb) {
        var createData = {
          heading:params.heading,
        //   url:params.url,
          description: params.description,
          home_description: params.home_description,
          code:params.code,
          alt: params.alt,
        };
        console.log({params})
    
        if (params.files && params.files.image) {
          var fileName =
            "corporate" +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/corporate/" + fileName;
    
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
       
    
          corporateModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        corporateModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        corporateModel.fetchById(id, function(err, result) {
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
        code:params.code,
        alt: params.alt,
      };
  console.log({params})
      if (params.files && params.files.image) {
        var fileName =
          "corporate" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/corporate/" + fileName;
  
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
      corporateModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        corporateModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      corporateModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = corporate;