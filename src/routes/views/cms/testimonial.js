"use strict";
var request = require("request");
var common = require("./common");
var moment = require("moment");

var testimonial = {

  add: function (req, res, next) {
    common
      .apiRequest(
        req.protocol + "://" + req.get("host") + "/api/careathomeoff",
        req.headers.cookie,
        "GET",
      )
      .then((result) => {
        res.render("cms/testimonial-add.ejs", {
          care: result,
          response: "",
          msg: "",
        });
      })
      .catch((err) => {
        res.render("cms/testimonial-add.ejs", {
          response: "error",
          msg: err,
        });
      });
  },

  addPost: function (req, res, next) {
    var requestData = [
      common.apiRequest(
        req.protocol + "://" + req.get("host") + "/api/testimonial/add",
        req.headers.cookie,
        "POST",
        req.body,
        req.files
      ),
      common.apiRequest(
        req.protocol + "://" + req.get("host") + "/api/careathomeoff",
        req.headers.cookie,
        "GET",
      ),
    ];
    Promise.all(requestData)
      .then((data) => {
        res.render("cms/testimonial-add.ejs", {
          care: data[1],
          response: "success",
          msg: "Added successfully.",
        });
      })
      .catch((err) => {
        res.render("cms/testimonial-add.ejs", {
          response: "error",
          msg: err,
        });
      });
  },  

  manage: function (req, res, next) {
    common
      .apiRequest(
        req.protocol + "://" + req.get("host") + "/api/testimonial",
        req.headers.cookie,
        "GET"
      )
      .then((result) => {
        res.render("cms/testimonial-manage.ejs", {
          testimonial: result,
          moment: moment,
        });
      })
      .catch((err) => {
        console.log(err);
        res.render("cms/testimonial-manage.ejs");
      });
  },

  edit: function (req, res, next) {
    if (!req.params || !req.params.id) {
      return next(
        ec.appError({
          status: ec.INVALID_ID,
          message: "invalid id provided.",
        })
      );
    }

    var requestData = [
      common.apiRequest(
        req.protocol +
          "://" +
          req.get("host") +
          "/api/testimonial/" +
          req.params.id,
        req.headers.cookie,
        "GET"
      ),
      common.apiRequest(
        req.protocol + "://" + req.get("host") + "/api/careathomeoff",
        req.headers.cookie,
        "GET",
      ),
    ];

    Promise.all(requestData)
      .then((data) => {
        res.render("cms/testimonial-edit.ejs", {
          // _csrf: req.csrfToken(),
          testimonial: data[0],
          care: data[1],
          response: "",
        });
      })
      .catch((err) => {
        res.render("cms/testimonial-edit.ejs", {
          response: "error",
          msg: err,
        });
      });
  },

  editPost: function (req, res, next) {
    var requestData = [
      common.apiRequest(
        req.protocol + "://" + req.get("host") + "/api/testimonial/update",
        req.headers.cookie,
        "POST",
        req.body,
        req.files
      ),
      common.apiRequest(
        req.protocol + "://" + req.get("host") + "/api/careathomeoff",
        req.headers.cookie,
        "GET",
      ),
    ];
    Promise.all(requestData)
      .then((data) => {
        res.render("cms/testimonial-edit.ejs", {
          testimonial: data[0],
          care : data[1],
          response: "success",
          msg: "Updated successfully.",
        });
      })
      .catch((err) => {
        // console.log(err);
        res.render("cms/testimonial-edit.ejs", {
          response: "error",
          msg: err,
        });
      });
  },

  deletePost: function (req, res, next) {
    if (!req.body || !req.body.id) {
      return next(
        ec.appError({
          status: ec.INVALID_ID,
          message: "invalid id provided.",
        })
      );
    }

    var requestData = [
      common.apiRequest(
        req.protocol + "://" + req.get("host") + "/api/testimonial/delete",
        req.headers.cookie,
        "POST",
        req.body
      ),
    ];

    let result = { success: false };

    Promise.all(requestData)
      .then((data) => {
        result = data;
      })
      .catch((err) => {
        console.log("e:", err);
      });

    res.json({ success: true });
  },
};
module.exports = testimonial;
