"use strict";

var path = require("path");
var fs = require("fs");

var footerModel = require("../model/footer");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var footer = {
    add: function (params, cb) {
        var createData = {
          info:params.info,
          company:params.company,
          description: params.description,
          business: params.business,
          investors:params.investors,
          resources: params.resources,
          careers: params.careers,
        };
        console.log({params})
    
        if (params.files && params.files.image) {
          var fileName =
            "footer" +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/footer/" + fileName;
    
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
       
    
          footerModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        footerModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        footerModel.fetchById(id, function(err, result) {
           if (err) {
                return cb(err);
            }
            return cb(err, result);
        });
    },

    update: function (params, cb) {
      var createData = {
        info:params.info,
        company:params.company,
        description: params.description,
        business: params.business,
        investors:params.investors,
        resources: params.resources,
        careers: params.careers,
      };
  console.log({params})
      if (params.files && params.files.image) {
        var fileName =
          "footer" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/footer/" + fileName;
  
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
      footerModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        footerModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      footerModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = footer;