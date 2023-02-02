"use strict";

var mongoose = require("mongoose");
var ec = require("../lib/error_consts");
//console.log(cons.year);
var Schema = mongoose.Schema;

var blogsSchema = new mongoose.Schema({
    heading:{ type: String },
    // url:{ type: String },
    // subheading:{ type: String },
    // priority:{ type: Number },
    description: { type: String },
    home_description:  { type: String },
    description2:  { type: String },
    date: { type: String },
    image:{ type: String },
    alt:{ type: String },
    url:{ type: String },
    detailimage:{ type: String },
    pagetitle: { type: String },
    descc: { type: String },
    keyword: { type: String },
});

var blogsModel = mongoose.model("blogs", blogsSchema);

var blogs = {
    create: function (params, cb) {
        if (!params) {
          return cb(
            ec.appError({
              status: ec.INVALID_PARAM,
              message: "No data provided",
            })
          );
        }
    
        blogsModel.create(params, function (err, result) {
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
        blogsModel.find(function(err, result) {
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
        console.log({id})
        blogsModel.find({_id: id}, function(err, result) {
          console.log({result})
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

    fetchByUrl: function(id, cb) {
        console.log({id})
        blogsModel.find({url: id}, function(err, result) {
          console.log({result})
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
  
      blogsModel.updateOne({ _id: id }, { $set: updateData }, function (
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
      blogsModel.deleteOne({_id: params.id}
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
module.exports = blogs;