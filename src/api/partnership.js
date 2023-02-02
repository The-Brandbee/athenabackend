"use strict";

var path = require("path");
var fs = require("fs");

var aboutModel = require("../model/partnership");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var partnership = {
    add: function (params, cb) {
        var createData = {
          heading:params.heading,
        //   url:params.url,
          description: params.description,
        //   home_description: params.home_description,
          // alt:params.alt,
        //   alt: params.alt,
        };
        console.log({params})
        console.log(params.files.bannerimage)
    
        // if (params.files && params.files.image) {
        //   var fileName =
        //     "partnership" +
        //     params.files.image.md5 +
        //     path.extname(params.files.image.name);
        //   var filePath = "public/uploads/partnership/" + fileName;
    
        //   fs.writeFile(filePath, params.files.image.data, function (
        //     err,
        //     written
        //   ) {
        //     if (err) {
        //       console.log("Error in uploading icon." + err);
        //     }
        //   });
    

        // createData["image"] = filePath;
        // }
       

        // if (params.files && params.files.image2) {
        //     var fileName =
        //       "partnership" +
        //       params.files.image2.md5 +
        //       path.extname(params.files.image2.name);
        //     var filePath = "public/uploads/partnership/" + fileName;
      
        //     fs.writeFile(filePath, params.files.image2.data, function (
        //       err,
        //       written
        //     ) {
        //       if (err) {
        //         console.log("Error in uploading icon." + err);
        //       }
        //     });
    
        //     createData["image2"] = filePath;
        //   }

console.log("bannerimage")
        if (params.files && params.files.bannerimage) {
          var fileName =
            "partnership" +
            params.files.bannerimage.md5 +
            path.extname(params.files.bannerimage.name);
          var filePath = "public/uploads/partnership/" + fileName;
    
          fs.writeFile(filePath, params.files.bannerimage.data, function (
            err,
            written
          ) {
            if (err) {
              console.log("Error in uploading icon." + err);
            }
          });
  
          createData["bannerimage"] = filePath;
        }
    
console.log("bannerimage1")
console.log({createData})


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
        // home_description: params.home_description,
        // priority:params.priority,
        // alt: params.alt,
      };
  console.log({paramssss:params})
  console.log(params.files.bannerimage)
      if (params.files && params.files.image) {
        var fileName =
          "partnership" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/partnership/" + fileName;
  
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

      if (params.files && params.files.image2) {
        var fileName =
          "partnership" +
          params.files.image2.md5 +
          path.extname(params.files.image2.name);
        var filePath = "public/uploads/partnership/" + fileName;
  
        fs.writeFile(filePath, params.files.image2.data, function (
          err,
          written
        ) {
          if (err) {
            console.log("Error in uploading icon." + err);
          }
        });

        createData["image2"] = filePath;
      }
    
      if (params.files && params.files.bannerimage) {
        var fileName =
          "partnership" +
          params.files.bannerimage.md5 +
          path.extname(params.files.bannerimage.name);
        var filePath = "public/uploads/partnership/" + fileName;
  
        fs.writeFile(filePath, params.files.bannerimage.data, function (
          err,
          written
        ) {
          if (err) {
            console.log("Error in uploading icon." + err);
          }
        });

        createData["bannerimage"] = filePath;
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
module.exports = partnership;