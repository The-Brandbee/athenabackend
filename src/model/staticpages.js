"use strict";

var mongoose = require("mongoose");
var ec = require("../lib/error_consts");
//console.log(cons.year);
var Schema = mongoose.Schema;

var staticpagesSchema = new mongoose.Schema({
    name:{ type: String },
    url:{ type: String ,
      unique: true},
    description: { type: String },
    image:{ type: String },
    meta_title: { type: String },
    meta_description:{ type: String },
    meta_keyword: { type: String },

});
var staticpagesModel = mongoose.model("staticpages", staticpagesSchema);

var staticpages = {
    create: function (params, cb) {
        if (!params) {
          return cb(
            ec.appError({
              status: ec.INVALID_PARAM,
              message: "No data provided",
            })
          );
        }
    
        staticpagesModel.create(params, function (err, result) {
          if (err) {
            console.log(err);
            return cb(
              ec.appError({
                status: ec.DB_ERROR,
                message: "DB Fetch Error",
              })
            );
          }
    
          return cb(err, result);
        });
      },

      fetchAll: function (cb) {
        staticpagesModel.find(function(err, result) {
          if (err) {
              console.log(err);
              return cb(ec.appError({
                  status: ec.DB_ERROR,
                  message: "DB Fetch Error"
              }));
          }
          return cb(err, result);
  
      });
      },    

      fetchById: function(id, cb) {
        staticpagesModel.find({_id: id}, function(err, result) {
            if (err) {
                console.log(err);
                return cb(ec.appError({
                    status: ec.DB_ERROR,
                    message: "DB Fetch Error"
                }));
            }
            return cb(err, result[0]);
    
        });
    },

    update: function (id, updateData, cb) {
      if (!updateData || !id) {
        return cb(
          ec.appError({
            status: ec.INVALID_PARAM,
            message: "No data provided",
          })
        );
      }
  
      staticpagesModel.updateOne({ _id: id }, { $set: updateData }, function (
        err,
        result
      ) {
        if (err) {
          console.log(err);
          return cb(
            ec.appError({
              status: ec.DB_ERROR,
              message: "DB update Error",
            })
          );
        }
  
        return cb(err, result);
      });
    },

    fetchByUrl: function(url, cb) {
      staticpagesModel.find({url: url}, function(err, result) {
          if (err) {
              console.log(err);
              return cb(ec.appError({
                  status: ec.DB_ERROR,
                  message: "DB Fetch Error"
              }));
          }
          return cb(err, result[0]);
  
      });
  },
      
  deleteId: function(params, cb) {
    staticpagesModel.deleteOne({_id: params.id}
      , function(err, result) {
        if (err) {
            return cb(ec.appError({
                status: ec.DB_ERROR,
                message: "DB Fetch Error"
            }));
        }
        //console.log(result);
        return cb(err, result);
  
    });
  },
};
module.exports = staticpages;