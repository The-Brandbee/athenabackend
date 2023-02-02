"use strict";

var path = require("path");
var fs = require("fs");

var leadershipModel = require("../model/leadership");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var leadership = {
    add: function (params, cb) {
        var createData = {
            name:params.name,
          url:params.url,
          designation: params.designation,
          testimonial: params.testimonial,
          priority:params.priority,
          alt: params.alt,
        };
        console.log({params})
    
        if (params.files && params.files.image) {
          var fileName =
            "leadership" +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/leadership/" + fileName;
    
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
       
    
          leadershipModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        leadershipModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        leadershipModel.fetchById(id, function(err, result) {
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
      designation: params.designation,
      testimonial: params.testimonial,
      priority:params.priority,
      alt: params.alt,
      };
  console.log({params})
      if (params.files && params.files.image) {
        var fileName =
          "leadership" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/leadership/" + fileName;
  
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
      leadershipModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        leadershipModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      leadershipModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = leadership;