"use strict";

var path = require("path");
var fs = require("fs");

var foundationModel = require("../model/foundation");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var foundation = {
    add: function (params, cb) {
        var createData = {
          heading:params.heading,
          url:params.url,
          description: params.description,
          home_description: params.home_description,
          alt:params.alt,
          "foundation": [],
        };
        console.log({params})

        if (params.files && params.files.image) {
          var fileName =
            "foundation" +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/foundation/" + fileName;
    
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

        let title1 = params.image_alt;

  
        if (typeof title1 == "string") {
          var solution = {
            alt: params.alt,
            count: params.count,
            text: params.text,
          }
          var fileName =  'foundation_' + indx + '_' + params.files.image.md5 + path.extname(params.files.image.name);
          var filePath = 'public/uploads/foundation/' + fileName;

          fs.writeFile(filePath, params.files.image.data, function(err, written) {

              if (err) {
                  console.log('Error in uploading event image.' + err);
              }
          });
          solution["fimage"] = filePath;
          createData.foundation.push(solution);
        }
         else {
          for(var indx in params.image){
            if (params.image[indx] != '' ) {
              var solution = {
                alt:  params.alt[indx],
                count: params.count[indx],
                text: params.text[indx],
                //image: null
              }


            
              if (params.files.image[indx] && params.files.image[indx].data) {
                var fileName = 'foundation_' + indx + '_' + params.files.image[indx].md5 + path.extname(params.files.image[indx].name);
                  var filePath = 'public/uploads/foundation/' + fileName;
  
                  fs.writeFile(filePath, params.files.image[indx].data, function(err, written) {
  
                      if (err) {
                          console.log('Error in uploading solution image.' + err);
                      }
                  });
                  solution["fimage"] = filePath;
              } 
              createData.foundation.push(solution);
           
          }
        }
        }
    
          foundationModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        foundationModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        foundationModel.fetchById(id, function(err, result) {
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
        description: params.description,
        home_description: params.home_description,
        // priority:params.priority,
        alt: params.alt,
      };
  console.log({params})
      if (params.files && params.files.image) {
        var fileName =
          "foundation" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/foundation/" + fileName;
  
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
      foundationModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        foundationModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      foundationModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = foundation;