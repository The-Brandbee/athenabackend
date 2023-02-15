"use strict";

var mongoose = require("mongoose");
var ec = require("../lib/error_consts");

var testimonialSchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
  alt: {type: String},
  desc: { type: String },
  shortdesc: {type:String},
});
var testimonialModel = mongoose.model("testimonial", testimonialSchema);

var testimonial = {
  create: function (params, cb) {
    if (!params) {
      return cb(
        ec.appError({
          status: ec.INVALID_PARAM,
          message: "No data provided",
        })
      );
    }

    testimonialModel.create(params, function (err, result) {
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
    testimonialModel.find(function (err, result) {
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

  fetchById: function (id, cb) {
    testimonialModel.find({ _id: id }, function (err, result) {
      if (err) {
        console.log(err);
        return cb(
          ec.appError({
            status: ec.DB_ERROR,
            message: "DB Fetch Error",
          })
        );
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

    testimonialModel.updateOne(
      { _id: id },
      { $set: updateData },
      function (err, result) {
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
      }
    );
  },

  deleteId: function (params, cb) {
    testimonialModel.deleteOne({ _id: params.id }, function (err, result) {
      if (err) {
        return cb(
          ec.appError({
            status: ec.DB_ERROR,
            message: "DB Fetch Error",
          })
        );
      }
      //console.log(result);
      return cb(err, result);
    });
  },
};
module.exports = testimonial;
