"use strict";

var mongoose = require("mongoose");
var ec = require("../lib/error_consts");
//console.log(cons.year);
var Schema = mongoose.Schema;

var leadershipbannerSchema = new mongoose.Schema({
    name:{ type: String },
    url:{ type: String },
    subheading:{ type: String },
    // priority:{ type: Number },
    alt: { type: String },
    image:{ type: String },
    mobileimage:{ type: String }
});
var leadershipbannerModel = mongoose.model("leadershipbanner", leadershipbannerSchema);

var leadershipbanner = {
    create: function (params, cb) {
        if (!params) {
          return cb(
            ec.appError({
              status: ec.INVALID_PARAM,
              message: "No data provided",
            })
          );
        }
    
        leadershipbannerModel.create(params, function (err, result) {
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
        leadershipbannerModel.find(function(err, result) {
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
        leadershipbannerModel.find({_id: id}, function(err, result) {
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
  
      leadershipbannerModel.updateOne({ _id: id }, { $set: updateData }, function (
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
      leadershipbannerModel.deleteOne({_id: params.id}
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
module.exports = leadershipbanner;