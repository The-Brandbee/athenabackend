"use strict";

var path = require("path");
var fs = require("fs");

var staticpagesModel = require("../model/staticpages");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var staticpages = {
    add: function (params, cb) {
        var createData = {
          name:params.name,
          url:params.url,
          description: params.description,
           meta_title: params.meta_title,
            meta_description:params.meta_description,
            meta_keyword: params.meta_keyword
        };
    
        if (params.files && params.files.image) {
          var fileName =
            params.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/staticpages/" + fileName;
    
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
       
    
          staticpagesModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        staticpagesModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        staticpagesModel.fetchById(id, function(err, result) {
           if (err) {
                return cb(err);
            }
            return cb(err, result);
        });
    },

    update: function (params, cb) {
      var createData = {
        name:params.name,
        url:params.url,
        description: params.description,
        meta_title: params.meta_title,
        meta_description:params.meta_description,
        meta_keyword: params.meta_keyword
      };
  
      if (params.files && params.files.image) {
        var fileName =
          params.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/staticpages/" + fileName;
  
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
     
  
  
      staticpagesModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        staticpagesModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    fetchByUrl:function(url, cb) {
      staticpagesModel.fetchByUrl(url, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
  },

  deleteId: function(params, cb) {
    staticpagesModel.deleteId(params, function(err, result) {
       if (err) {
            return cb(err);
        }
        return cb(err, result);
    });
  },
};
module.exports = staticpages;