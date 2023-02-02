"use strict";

var path = require("path");
var fs = require("fs");

var innovationModel = require("../model/innovation");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var innovation = {
    add: function (params, cb) {
        var createData = {
          heading:params.heading,
          url:params.url,
          description: params.description,
          subheading: params.subheading,
          mainimage:params.mainimage,
          alt: params.alt,
          url1: params.url1,
          image: params.image,
          alt1: params.alt1,
          url2: params.url2,
          image1: params.image1,
          alt2: params.alt2,
          url3: params.url3,
          image2: params.image2,
          alt3: params.alt3,
          url4: params.url4,
          image3: params.image3,
        };
        console.log({paramsmainimage:params.files.mainimage})
    

        if (params.files && params.files.mainimage) {
          var fileName =
            "innovation" +
            params.files.mainimage.md5 +
            path.extname(params.files.mainimage.name);
          var filePath = "public/uploads/innovation/" + fileName;
      
          fs.writeFile(filePath, params.files.mainimage.data, function (
            err,
            written
          ) {
            if (err) {
              console.log("Error in uploading icon." + err);
            }
          });
      
          createData["mainimage"] = filePath;
        }

        if (params.files && params.files.image) {
          var fileName =
            "innovation" +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/innovation/" + fileName;
    
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
        if(params.files && params.files.image1){
          var fileNames =
          "homebanner" +
          params.files.image1.md5 +
          path.extname(params.files.image1.name);
        var filePaths = "public/uploads/homebanner/" + fileNames;
      
        fs.writeFile(filePaths, params.files.image1.data, function (
          err,
          written
        ) {
          if (err) {
            console.log("Error in uploading icon." + err);
          }
        });
      
        createData["image1"] = filePaths;
        }


        if(params.files && params.files.image2){
          var fileNames =
          "homebanner" +
          params.files.image2.md5 +
          path.extname(params.files.image2.name);
        var filePaths = "public/uploads/homebanner/" + fileNames;
      
        fs.writeFile(filePaths, params.files.image2.data, function (
          err,
          written
        ) {
          if (err) {
            console.log("Error in uploading icon." + err);
          }
        });
      
        createData["image2"] = filePaths;
        }


        if(params.files && params.files.image3){
          var fileNames =
          "homebanner" +
          params.files.image3.md5 +
          path.extname(params.files.image3.name);
        var filePaths = "public/uploads/homebanner/" + fileNames;
      
        fs.writeFile(filePaths, params.files.image3.data, function (
          err,
          written
        ) {
          if (err) {
            console.log("Error in uploading icon." + err);
          }
        });
      
        createData["image3"] = filePaths;
        }
    
          innovationModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        innovationModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        innovationModel.fetchById(id, function(err, result) {
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
        subheading: params.subheading,
        mainimage:params.mainimage,
        alt: params.alt,
        url1: params.url1,
        image: params.image,
        alt1: params.alt1,
        url2: params.url2,
        image1: params.image1,
        alt2: params.alt2,
        url3: params.url3,
        image2: params.image2,
        alt3: params.alt3,
        url4: params.url4,
        image3: params.image3,
      };
  console.log({params})
    
  if (params.files && params.files.mainimage) {
    var fileName =
      "innovation" +
      params.files.mainimage.md5 +
      path.extname(params.files.mainimage.name);
    var filePath = "public/uploads/innovation/" + fileName;

    fs.writeFile(filePath, params.files.mainimage.data, function (
      err,
      written
    ) {
      if (err) {
        console.log("Error in uploading icon." + err);
      }
    });

    createData["mainimage"] = filePath;
  }
  
  if (params.files && params.files.image) {
        var fileName =
          "innovation" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/innovation/" + fileName;
  
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
  
      if(params.files && params.files.image1){
        var fileNames =
        "homebanner" +
        params.files.image1.md5 +
        path.extname(params.files.image1.name);
      var filePaths = "public/uploads/homebanner/" + fileNames;
    
      fs.writeFile(filePaths, params.files.image1.data, function (
        err,
        written
      ) {
        if (err) {
          console.log("Error in uploading icon." + err);
        }
      });
    
      createData["image1"] = filePaths;
      }


      if(params.files && params.files.image2){
        var fileNames =
        "homebanner" +
        params.files.image2.md5 +
        path.extname(params.files.image2.name);
      var filePaths = "public/uploads/homebanner/" + fileNames;
    
      fs.writeFile(filePaths, params.files.image2.data, function (
        err,
        written
      ) {
        if (err) {
          console.log("Error in uploading icon." + err);
        }
      });
    
      createData["image2"] = filePaths;
      }


      if(params.files && params.files.image3){
        var fileNames =
        "homebanner" +
        params.files.image3.md5 +
        path.extname(params.files.image3.name);
      var filePaths = "public/uploads/homebanner/" + fileNames;
    
      fs.writeFile(filePaths, params.files.image3.data, function (
        err,
        written
      ) {
        if (err) {
          console.log("Error in uploading icon." + err);
        }
      });
    
      createData["image3"] = filePaths;
      }
  
  
      console.log({createData})
      innovationModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        innovationModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      innovationModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = innovation;