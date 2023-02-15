"use strict";

var path = require("path");
var fs = require("fs");

var testimonialModel = require("../model/testimonial");
var ec = require("../lib/error_consts");
var utils = require("../lib/utils");

var testimonial = {
  add: function (params, cb) {
    var createData = {
        name: params.name,
        desc: params.desc,
        shortdesc:params.shortdesc,
        alt: params.alt,
    };

    if (params.files && params.files.image) {
        var title="testimonial";
        var fileName =title+ params.files.image.md5 +
        path.extname(params.files.image.name);
      var filePath = "public/uploads/testimonial/" + fileName;

      fs.writeFile(filePath, params.files.image.data, function (err, written) {
        if (err) {
          console.log("Error in uploading icon." + err);
        }
      });

      createData["image"] = filePath;
    }
    console.log(createData);

    testimonialModel.create(createData, function (err, result) {
      if (err) {
        return cb(err);
      }

      return cb(err, result);
    });
  },

  fetchAll: function (cb) {
    testimonialModel.fetchAll(function (err, result) {
      if (err) {
        return cb(err);
      }
      return cb(err, result);
    });
  },

  fetchById: function (id, cb) {
    testimonialModel.fetchById(id, function (err, result) {
      if (err) {
        return cb(err);
      }
      return cb(err, result);
    });
  },

  update: function (params, cb) {
    var createData = {
      name: params.name,
      desc: params.desc,
      shortdesc:params.shortdesc,
      alt: params.alt,
    };

    if (params.files && params.files.image) {
        var title="testimonial";
        var fileName =title+ params.files.image.md5 +
        path.extname(params.files.image.name);
      var filePath = "public/uploads/testimonial/" + fileName;

      fs.writeFile(filePath, params.files.image.data, function (err, written) {
        if (err) {
          console.log("Error in uploading icon." + err);
        }
      });

      createData["image"] = filePath;
    }
    console.log(createData);

    testimonialModel.update(params._id, createData, function (err, result) {
      if (err) {
        return cb(err);
      }

      testimonialModel.fetchById(params._id, function (err, updatedData) {
        if (err) {
          return cb(err);
        }
        return cb(err, updatedData);
      });
    });
  },

  deleteId: function (params, cb) {
    testimonialModel.deleteId(params, function (err, result) {
      if (err) {
        return cb(err);
      }
      return cb(err, result);
    });
  },
};
module.exports = testimonial;
