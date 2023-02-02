"use strict";

var path = require("path");
var fs = require("fs");

var investorModel = require("../model/investor");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var investor = {
    add: function (params, cb) {
        var createData = {
          title:params.title,
          url:params.url,
        //   description: params.description,
        //   home_description: params.home_description,
          // alt:params.alt,
        priority:params.priority,
        //   alt: params.alt,
        };
        console.log({params})
    
        if (params.files && params.files.image) {
          var fileName =
            "investor" +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/investor/" + fileName;
    
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
       
    
          investorModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        investorModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        investorModel.fetchById(id, function(err, result) {
           if (err) {
                return cb(err);
            }
            return cb(err, result);
        });
    },

    update: function (params, cb) {
      var createData = {
        title:params.title,
        url:params.url,
        // description: params.description,
        // home_description: params.home_description,
        priority:params.priority,
        // alt: params.alt,
      };
  console.log({params})
      if (params.files && params.files.image) {
        var fileName =
          "investor" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/investor/" + fileName;
  
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
      investorModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        investorModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      investorModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = investor;