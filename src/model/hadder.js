"use strict";

var mongoose = require("mongoose");
var ec = require("../lib/error_consts");
//console.log(cons.year);
var Schema = mongoose.Schema;

var hadderSchema = new mongoose.Schema({
  category:{ type: String },
  title:{ type: String, unique:true },
//   type: { type: String },
//   alt: { type: String },
  url: { type: String },
//   switch:{ type: String },
//   comments: { type: String },
//   date: { type: String },
//   image: { type: String },
//     meta_title: {type: String},
//     meta_description: {type: String},
//     meta_keyword: {type: String},
    created_at :{type: Date, default: Date.now}
});
var hadderModel = mongoose.model("hadder", hadderSchema);

var hadder = {
    create: function (params, cb) {
        if (!params) {
          return cb(
            ec.appError({
              status: ec.INVALID_PARAM,
              message: "No data provided",
            })
          );
        }
    console.log("hadderModel")
        hadderModel.create(params, function (err, result) {
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
        hadderModel.find().sort( { "_id": -1 }).exec(function(err, result) {
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
        hadderModel.find({_id: id}, function(err, result) {
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

    
    fetchByUrl: function(url, cb) {
      hadderModel.find({url: url}, function(err, result) {
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
  
      hadderModel.updateOne({ _id: id }, { $set: updateData }, function (
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

    deleteDataId:function(params, cb) {
      hadderModel.deleteOne({_id: params.id}
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
module.exports = hadder;