"use strict";

var mongoose = require("mongoose");
var ec = require("../lib/error_consts");
//console.log(cons.year);
var Schema = mongoose.Schema;

var pluseSchema = new mongoose.Schema({
    title:{ type: String },
    url: {type: String},
    pluse: [{
        image_alt:{ type: String, default: null },
    image: {type: String, default: null}
    }],

});
var pluseModel = mongoose.model("pluse", pluseSchema);

var pluse = {
    create: function (params, cb) {
        if (!params) {
          return cb(
            ec.appError({
              status: ec.INVALID_PARAM,
              message: "No data provided",
            })
          );
        }
    
        pluseModel.create(params, function (err, result) {
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
        pluseModel.find(function(err, result) {
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
        pluseModel.find({_id: id}, function(err, result) {
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

    // update: function (id, updateData, cb) {
    //   console.log("modal data",updateData);
    //   if (!updateData || !id) {
    //     return cb(
    //       ec.appError({
    //         status: ec.INVALID_PARAM,
    //         message: "No data provided",
    //       })
    //     );
    //   }
  
    //   pluseModel.updateOne({ _id: id }, { $set: updateData }, function (
    //     err,
    //     result
    //   ) {
    //     if (err) {
    //       console.log(err);
    //       return cb(
    //         ec.appError({
    //           status: ec.DB_ERROR,
    //           message: "DB update Error",
    //         })
    //       );
    //     }
  
    //     return cb(err, result);
    //   });
    // },
      
    update: function (id, data, cb) {
      if (!data || !id) {
        return cb(
          ec.appError({
            status: ec.INVALID_PARAM,
            message: "No data provided",
          })
        );
      }
  
      pluseModel.updateOne({ _id: id }, { $addToSet: {$set: data.updateData, pluse: data.arrayData} }, function (
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

    deleteId:function(params, cb) {
      pluseModel.updateOne({_id: params.pluseId}, 
        {$pull: {pluse: {_id: params.id}}}
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

    deleteDataId:function(params, cb) {
      pluseModel.deleteOne({_id: params.id}
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
module.exports = pluse;