"use strict";

var path = require("path");
var fs = require("fs");

var awardsModel = require("../model/awards");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var awards = {
    add: function (params, cb) {
        var createData = {
          heading:params.heading,
          url:params.url,
          description: params.description,
          // certificateimage: params.certificateimage,
          certificatealt:params.certificatealt,
          alt: params.alt,
        };
        console.log({params})
    
        if (params.files && params.files.certificateimage) {
          var fileName =
            "awards" +
            params.files.certificateimage.md5 +
            path.extname(params.files.certificateimage.name);
          var filePath = "public/uploads/awards/" + fileName;
    
          fs.writeFile(filePath, params.files.certificateimage.data, function (
            err,
            written
          ) {
            if (err) {
              console.log("Error in uploading icon." + err);
            }
          });
    

        createData["certificateimage"] = filePath;
        }


        if (params.files && params.files.image) {
          var fileName =
            "awards" +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/awards/" + fileName;
    
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
       
    
          awardsModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        awardsModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        awardsModel.fetchById(id, function(err, result) {
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
        certificatealt:params.certificatealt,
        // priority:params.priority,
        alt: params.alt,
      };
  console.log({params})
      if (params.files && params.files.image) {
        var fileName =
          "awards" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/awards/" + fileName;
  
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
    

      if (params.files && params.files.certificateimage) {
        var fileName =
          "awards" +
          params.files.certificateimage.md5 +
          path.extname(params.files.certificateimage.name);
        var filePath = "public/uploads/awards/" + fileName;
  
        fs.writeFile(filePath, params.files.certificateimage.data, function (
          err,
          written
        ) {
          if (err) {
            console.log("Error in uploading icon." + err);
          }
        });
  

      createData["certificateimage"] = filePath;
      }
  
      console.log({createData})
      awardsModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        awardsModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      awardsModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = awards;