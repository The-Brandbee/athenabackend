"use strict";

var mongoose = require("mongoose");
var ec = require("../lib/error_consts");
//console.log(cons.year);
var Schema = mongoose.Schema;

var aboutSchema = new mongoose.Schema({
    heading:{ type: String },
    // url:{ type: String },
    // subheading:{ type: String },
    // priority:{ type: Number },
    description: { type: String },
    home_description: { type: String },
    image:{ type: String },
    alt:{ type: String }
});
var aboutModel = mongoose.model("overview", aboutSchema);

var overview = {
    create: function (params, cb) {
        if (!params) {
          return cb(
            ec.appError({
              status: ec.INVALID_PARAM,
              message: "No data provided",
            })
          );
        }
    
        aboutModel.create(params, function (err, result) {
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
        aboutModel.find(function(err, result) {
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
        aboutModel.find({_id: id}, function(err, result) {
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
  
      aboutModel.updateOne({ _id: id }, { $set: updateData }, function (
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

    deleteId: function(params, cb) {
      aboutModel.deleteOne({_id: params.id}
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
module.exports = overview;