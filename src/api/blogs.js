"use strict";

var path = require("path");
var fs = require("fs");

var blogsModel = require("../model/blogs");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var blogs = {
    add: function (params, cb) {
        var createData = {
          heading:params.heading,
        //   url:params.url,
          description: params.description,
          home_description: params.home_description,
          description2: params.description2,
          date:params.date,
          alt: params.alt,
          url: params.url,
          pagetitle: params.pagetitle,
          descc: params.descc,
          keyword: params.keyword,
        };
        console.log({params})
    
        if (params.files && params.files.image) {
          var fileName =
            "blogs" +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/blogs/" + fileName;
    
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


        if (params.files && params.files.detailimage) {
          var fileName =
            "blogs" +
            params.files.detailimage.md5 +
            path.extname(params.files.detailimage.name);
          var filePath = "public/uploads/blogs/" + fileName;
    
          fs.writeFile(filePath, params.files.detailimage.data, function (
            err,
            written
          ) {
            if (err) {
              console.log("Error in uploading icon." + err);
            }
          });
    

        createData["detailimage"] = filePath;
        }
       
    
          blogsModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },

      fetchAll: function (cb) {
        blogsModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        console.log({id})
        blogsModel.fetchById(id, function(err, result) {
           if (err) {
                return cb(err);
            }
            return cb(err, result);
        });
    },

    fetchByUrl: function(id, cb) {
      console.log({id})
      blogsModel.fetchByUrl(id, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
  },
    
    update: function (params, cb) {
      var createData = {
        heading:params.heading,
      //   url:params.url,
        description: params.description,
        home_description: params.home_description,
        description2: params.description2,
        date:params.date,
        alt: params.alt,
        url: params.url,
        pagetitle: params.pagetitle,
        descc: params.descc,
                  keyword: params.keyword,
      };
  console.log({params})
      if (params.files && params.files.image) {
        var fileName =
          "blogs" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/blogs/" + fileName;
  
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

      if (params.files && params.files.detailimage) {
        var fileName =
          "blogs" +
          params.files.detailimage.md5 +
          path.extname(params.files.detailimage.name);
        var filePath = "public/uploads/blogs/" + fileName;
  
        fs.writeFile(filePath, params.files.detailimage.data, function (
          err,
          written
        ) {
          if (err) {
            console.log("Error in uploading icon." + err);
          }
        });

        createData["detailimage"] = filePath;
      }
    
  
      console.log({createData})
      blogsModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        blogsModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteId: function(params, cb) {
      blogsModel.deleteId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = blogs;