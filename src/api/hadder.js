"use strict";

var path = require("path");
var fs = require("fs");

var hadderModel = require("../model/hadder");
var hadderPreviewModel = require("../model/hadder");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var hadder = {
    add: function (params, cb) {
      console.log({params})
        var createData = {
          category:params.category,
          title:params.title,
        //   type:params.type,
        //   alt:params.alt,
          url:params.url,
        //   switch: params.switch,
        //   comments: params.comments,
        //   meta_title: params.meta_title,
        //   meta_description: params.meta_description,
        //   meta_keyword: params.meta_keyword,
        //   date: params.date,
        };
    
        if (params.files && params.files.image) {
          var fileName =
            params.title.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/hadder/" + fileName;
    
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
        if (params.files && params.files.homebanner) {
            var fileName =
              params.title.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() +
              params.files.homebanner.md5 +
              path.extname(params.files.homebanner.name);
            var filePath = "public/uploads/hadder/" + fileName;
      
            fs.writeFile(filePath, params.files.homebanner.data, function (
              err,
              written
            ) {
              if (err) {
                console.log("Error in uploading icon." + err);
              }
            });
      
            createData["homebanner"] = filePath;
          }
          if (params.files && params.files.hadderimage) {
            var fileName =
              params.title.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() +
              params.files.hadderimage.md5 +
              path.extname(params.files.hadderimage.name);
            var filePath = "public/uploads/hadder/" + fileName;
      
            fs.writeFile(filePath, params.files.hadderimage.data, function (
              err,
              written
            ) {
              if (err) {
                console.log("Error in uploading icon." + err);
              }
            });
      
            createData["hadderimage"] = filePath;
          }
    
          if (params.files && params.files.hadderdetailsimage) {
            var fileName =
              params.title.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() +
              params.files.hadderdetailsimage.md5 +
              path.extname(params.files.hadderdetailsimage.name);
            var filePath = "public/uploads/hadder/" + fileName;
      
            fs.writeFile(filePath, params.files.hadderdetailsimage.data, function (
              err,
              written
            ) {
              if (err) {
                console.log("Error in uploading icon." + err);
              }
            });
      
            createData["hadderdetailsimage"] = filePath;
          }
    
          hadderModel.create(createData, function (err, result) {
              console.log({result})
          if (err) {
            return cb(err);
          }
    
          return cb(err, result);
        });
    
      },
      addpreview: function (params, cb) {
        var createData = {
          category:params.category,
          title:params.title,
        //   type:params.type,
        //   alt:params.alt,
          url:params.url,
        //   switch: params.switch,
        //   comments: params.comments,
        //   meta_title: params.meta_title,
        //   meta_description: params.meta_description,
        //   meta_keyword: params.meta_keyword,
        //   date: params.date,
        };
    
        if (params.files && params.files.image) {
          var fileName =
            params.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() +
            params.files.image.md5 +
            path.extname(params.files.image.name);
          var filePath = "public/uploads/hadderpreview/" + fileName;
    
          fs.writeFile(filePath, params.files.image.data, function (
            err,
            written
          ) {
            if (err) {
              console.log("Error in uploading icon." + err);
            }
          });
    
          createData["image"] = filePath;
        } else if (params.image_url) {
            createData["image"] = params.image_url;
        }
     
          if (params.files && params.files.hadderimage) {
            var fileName =
              params.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() +
              params.files.hadderimage.md5 +
              path.extname(params.files.hadderimage.name);
            var filePath = "public/uploads/hadderpreview/" + fileName;
      
            fs.writeFile(filePath, params.files.hadderimage.data, function (
              err,
              written
            ) {
              if (err) {
                console.log("Error in uploading icon." + err);
              }
            });
      
            createData["hadderimage"] = filePath;
          } else if (params.hadderimage_url) {
                createData["hadderimage"] = params.hadderimage_url;
        }
    console.log({createData})
          hadderPreviewModel.create(createData, function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
    
      },
      fetchAll: function (cb) {
        hadderModel.fetchAll(function (err, result) {
          if (err) {
            return cb(err);
          }
          return cb(err, result);
        });
      }, 

      fetchById: function(id, cb) {
        hadderModel.fetchById(id, function(err, result) {
           if (err) {
                return cb(err);
            }
            return cb(err, result);
        });
    },

    fetchByUrl:function(url, cb) {
      var resp = {};
      hadderModel.fetchByUrl(url, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
  },
  fetchPreviewbyUrl:function(url, cb) {
    var resp = {};
    hadderPreviewModel.fetchByUrl(url, function(err, result) {
       if (err) {
            return cb(err);
        }
        return cb(err, result);
    });
},
    update: function (params, cb) {
      var createData = {
        category:params.category,
        title:params.title,
        type:params.type,
        alt:params.alt,
        url:params.url,
        switch: params.switch,
        comments: params.comments,
        meta_title: params.meta_title,
        meta_description: params.meta_description,
        meta_keyword: params.meta_keyword,
        date: params.date,
      };
  console.log({params})
      if (params.files && params.files.image) {
        var fileName =
          "neeleshmishra" +
          params.files.image.md5 +
          path.extname(params.files.image.name);
        var filePath = "public/uploads/hadder/" + fileName;
  
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
      if (params.files && params.files.homebanner) {
          var fileName =
            params.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() +
            params.files.homebanner.md5 +
            path.extname(params.files.homebanner.name);
          var filePath = "public/uploads/hadder/" + fileName;
    
          fs.writeFile(filePath, params.files.homebanner.data, function (
            err,
            written
          ) {
            if (err) {
              console.log("Error in uploading icon." + err);
            }
          });
    
          createData["homebanner"] = filePath;
        }
        if (params.files && params.files.hadderimage) {
          var fileName =
            params.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() +
            params.files.hadderimage.md5 +
            path.extname(params.files.hadderimage.name);
          var filePath = "public/uploads/hadder/" + fileName;
    
          fs.writeFile(filePath, params.files.hadderimage.data, function (
            err,
            written
          ) {
            if (err) {
              console.log("Error in uploading icon." + err);
            }
          });
    
          createData["hadderimage"] = filePath;
        }
  
        if (params.files && params.files.hadderdetailsimage) {
          var fileName =
            params.name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase() +
            params.files.hadderdetailsimage.md5 +
            path.extname(params.files.hadderdetailsimage.name);
          var filePath = "public/uploads/hadder/" + fileName;
    
          fs.writeFile(filePath, params.files.hadderdetailsimage.data, function (
            err,
            written
          ) {
            if (err) {
              console.log("Error in uploading icon." + err);
            }
          });
    
          createData["hadderdetailsimage"] = filePath;
        }
  
  
      hadderModel.update(params._id, createData, function (err, result) {
        if (err) {
          return cb(err);
        }
  
        hadderModel.fetchById(params._id, function (err, updatedData) {
          if (err) {
            return cb(err);
          }
          return cb(err, updatedData);
        });
      });
    },

    deleteDataId: function(params, cb) {
      hadderModel.deleteDataId(params, function(err, result) {
         if (err) {
              return cb(err);
          }
          return cb(err, result);
      });
    },
};
module.exports = hadder;