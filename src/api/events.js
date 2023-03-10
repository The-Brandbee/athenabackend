"use strict";

var path = require("path");
var fs = require("fs");

var aboutModel = require("../model/events");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var events = {
    add: function (params, cb) {
        var createData = {
          eventname:params.eventname,
          date:params.date,
          time: params.time,
          place: params.place,
          alt: params.alt,
        };
        console.log({params})
    
        if (params.files && params.files.image) {
          var fileName =
            "events" +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/events/" + fileName;
    
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
          eventname:params.eventname,
          date:params.date,
          time: params.time,
          place: params.place,
          alt: params.alt,
      };
  console.log({params})
      if (params.files && params.files.image) {
        var fileName =
          "events" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/events/" + fileName;
  
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
module.exports = events;