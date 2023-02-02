"use strict";

var path = require("path");
var fs = require("fs");

var leadershipbannerModel = require("../model/leadershipbanner");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var leadershipbanner = {
    add: function (params, cb) {
        var createData = {
          name:params.name,
          url:params.url,
          alt: params.alt,
          // priority:params.priority,
          subheading: params.subheading,
        };
        console.log({params})
    
        if (params.files && params.files.image) {
          var fileName =
            params.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/leadershipbanner/" + fileName;
    
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
       
             
  if(params.files && params.files.mobileimage){
    var fileNames =
    "leadershipbanner" +
    params.files.mobileimage.md5 +
    path.extname(params.files.mobileimage.name);
  var filePaths = "public/uploads/leadershipbanner/" + fileNames;

  fs.writeFile(filePaths, params.files.mobileimage.data, function (
    err,
    written
  ) {
    if (err) {
      console.log("Error in uploading icon." + err);
    }
  });

  createData["mobileimage"] = filePaths;
  }
    
          leadershipbannerModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        leadershipbannerModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        leadershipbannerModel.fetchById(id, function(err, result) {
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
        alt: params.alt,
        // priority:params.priority,
        subheading: params.subheading,
      };
  console.log({params})
      if (params.files && params.files.image) {
        var fileName =
          "leadershipbanner" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/leadershipbanner/" + fileName;
  
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
     
  if(params.files && params.files.mobileimage){
    var fileNames =
    "leadershipbanner" +
    params.files.mobileimage.md5 +
    path.extname(params.files.mobileimage.name);
  var filePaths = "public/uploads/leadershipbanner/" + fileNames;

  fs.writeFile(filePaths, params.files.mobileimage.data, function (
    err,
    written
  ) {
    if (err) {
      console.log("Error in uploading icon." + err);
    }
  });

  createData["mobileimage"] = filePaths;
  }
  
      console.log({createData})
      leadershipbannerModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        leadershipbannerModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      leadershipbannerModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = leadershipbanner;