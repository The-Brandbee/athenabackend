"use strict";
var request = require("request");
// var common = require("./common");
var moment = require("moment");
var ec = require("../../../lib/error_consts");
var config = require("../../../config/config");
var needle = require("needle");
const fs = require("fs");

var views = {

    robotsFile: function (req, res) {
        const data = fs.readFileSync('robots.txt', 'utf8');
        res.type('text/plain');
        res.send(data);
    },

    sitemapFile: function (req, res) {
        const data = fs.readFileSync('sitemap.xml', 'utf8');
        res.type('text/plain');
        res.send(data);
    },

    index: function(req, res, next) {

    var requestData = [
        needle("GET",req.protocol + "://" + req.get("host") + "/api/mainhadder"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/hadder"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/homebanner"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/about"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/core"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/leadership"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/investor"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/innovation"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/corporate"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/awards"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/staticcontent"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/footer"),
    ]

  Promise.all(requestData).then((data) => {
        console.log({mainhadder: data[0].body})
let maintestimonial = data[5].body.find(item => item.priority == 1)
console.log({maintestimonial})
    res.render("web/index.ejs", {
        mainhadder: data[0].body,
        hadder: data[1].body,
        homebanner: data[2].body,
        about: data[3].body,
        core: data[4].body,
        leadership: data[5].body.sort((a, b) => b.priority + a.priority),
        investor: data[6].body.sort((a, b) => b.priority + a.priority),
        innovation: data[7].body,
        corporate: data[8].body,
        awards: data[9].body,
        staticcontent: data[10].body,
        footer: data[11].body,
        maintestimonial: maintestimonial
    })

  }).catch((err) => {
    console.log(err);
    res.render("web/index.ejs");
});
        // return res.render("web/index.ejs");
    },

    leadership: function (req, res, next) {

    var requestData = [
        needle("GET",req.protocol + "://" + req.get("host") + "/api/mainhadder"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/hadder"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/leadershipbanner"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/leadershippage"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/leadershipfeature"),
    ]

  Promise.all(requestData).then((data) => {

res.render("web/our-leadership.ejs", {
        mainhadder: data[0].body,
        hadder: data[1].body,
        leadershipbanner: data[2].body,
        leadershippage: data[3].body,
        leadershipfeature: data[4].body,
})
}).catch((err) => {
  console.log(err);
  res.render("web/our-leadership.ejs");
});
 
        // res.render('web/our-leadership.ejs')
    },

    testimoinal: function (req, res, next) {

      var requestData = [
          needle("GET",req.protocol + "://" + req.get("host") + "/api/mainhadder"),
          needle("GET",req.protocol + "://" + req.get("host") + "/api/hadder"),
      ]
  
    Promise.all(requestData).then((data) => {
  
  res.render("web/testimoinal.ejs", {
          mainhadder: data[0].body,
          hadder: data[1].body,
  })
  }).catch((err) => {
    console.log(err);
    res.render("web/testimoinal.ejs");
  });
          // res.render('web/partnership.ejs')
      },

    overview:  function (req, res, next) {

      var requestData = [
          needle("GET",req.protocol + "://" + req.get("host") + "/api/mainhadder"),
          needle("GET",req.protocol + "://" + req.get("host") + "/api/hadder"),
      ]
  
    Promise.all(requestData).then((data) => {
  
  res.render("web/overview.ejs", {
          mainhadder: data[0].body,
          hadder: data[1].body,
  })
  }).catch((err) => {
    console.log(err);
    res.render("web/overview.ejs");
  });
          // res.render('web/partnership.ejs')
      },

      blogdetails: function (req, res, next) {
        var requestData = [
            needle("GET",req.protocol + "://" + req.get("host") + "/api/mainhadder"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/hadder"),
            needle("GET",req.protocol + "://" + req.get("host") + `/api/blogsdetails/${req.params.id}`),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/blogs"),
        ]
    
      Promise.all(requestData).then((data) => {
    
    res.render("web/blog-details.ejs", {
            mainhadder: data[0].body,
            hadder: data[1].body,
            blogs: data[2].body,
            allblogs: data[3].body,
    })
    }).catch((err) => {
      console.log(err);
      res.render("web/blog-details.ejs");
    });
            // res.render('web/partnership.ejs')
        },

      blog: function (req, res, next) {

        var requestData = [
            needle("GET",req.protocol + "://" + req.get("host") + "/api/mainhadder"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/hadder"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/blogs"),
        ]
    
      Promise.all(requestData).then((data) => {
    
    res.render("web/blog.ejs", {
            mainhadder: data[0].body,
            hadder: data[1].body,
            blogs: data[2].body,
    })
    }).catch((err) => {
      console.log(err);
      res.render("web/blog.ejs");
    });
            // res.render('web/partnership.ejs')
        },
    
      finance: function (req, res, next) {

        var requestData = [
            needle("GET",req.protocol + "://" + req.get("host") + "/api/mainhadder"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/hadder"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/financials"),
        ]
    
      Promise.all(requestData).then((data) => {
    
    res.render("web/finance.ejs", {
            mainhadder: data[0].body,
            hadder: data[1].body,
            financials: data[2].body,
    })
    }).catch((err) => {
      console.log(err);
      res.render("web/finance.ejs");
    });
            // res.render('web/partnership.ejs')
        },

      investor: function (req, res, next) {

        var requestData = [
            needle("GET",req.protocol + "://" + req.get("host") + "/api/mainhadder"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/hadder"),
        ]
    
      Promise.all(requestData).then((data) => {
    
    res.render("web/investor.ejs", {
            mainhadder: data[0].body,
            hadder: data[1].body,
    })
    }).catch((err) => {
      console.log(err);
      res.render("web/investor.ejs");
    });
            // res.render('web/partnership.ejs')
        },

      legal: function (req, res, next) {

        var requestData = [
            needle("GET",req.protocol + "://" + req.get("host") + "/api/mainhadder"),
            needle("GET",req.protocol + "://" + req.get("host") + "/api/hadder"),
        ]
    
      Promise.all(requestData).then((data) => {
    
    res.render("web/legal.ejs", {
            mainhadder: data[0].body,
            hadder: data[1].body,
    })
    }).catch((err) => {
      console.log(err);
      res.render("web/legal.ejs");
    });
            // res.render('web/partnership.ejs')
        },

    events: function (req, res, next) {

      var requestData = [
          needle("GET",req.protocol + "://" + req.get("host") + "/api/mainhadder"),
          needle("GET",req.protocol + "://" + req.get("host") + "/api/hadder"),
          needle("GET",req.protocol + "://" + req.get("host") + "/api/events"),
          needle("GET",req.protocol + "://" + req.get("host") + "/api/eventsbanner"),
      ]
  
    Promise.all(requestData).then((data) => {
  
  res.render("web/events.ejs", {
          mainhadder: data[0].body,
          hadder: data[1].body,
          events: data[2].body,
          eventsbanner: data[3].body
  })
  }).catch((err) => {
    console.log(err);
    res.render("web/events.ejs");
  });
          // res.render('web/partnership.ejs')
      },


    partnership: function (req, res, next) {

    var requestData = [
        needle("GET",req.protocol + "://" + req.get("host") + "/api/mainhadder"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/hadder"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/partnership"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/currentpatner"),
    ]

  Promise.all(requestData).then((data) => {

res.render("web/partnership.ejs", {
        mainhadder: data[0].body,
        hadder: data[1].body,
        partnership: data[2].body,
        currentpatner: data[3].body,
})
}).catch((err) => {
  console.log(err);
  res.render("web/partnership.ejs");
});
        // res.render('web/partnership.ejs')
    },
    about: function (req, res, next) {
        res.render('web/about-us.ejs')
    },
    awards: function (req, res, next) {

    var requestData = [
        needle("GET",req.protocol + "://" + req.get("host") + "/api/mainhadder"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/hadder"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/awards"),
    ]

  Promise.all(requestData).then((data) => {

res.render("web/awards.ejs", {
        mainhadder: data[0].body,
        hadder: data[1].body,
        awards: data[2].body,
})
}).catch((err) => {
  console.log(err);
  res.render("web/awards.ejs");
});
 
        // res.render('web/awards.ejs')
    },
    csr: function (req, res, next) {
        res.render('web/csr.ejs')
    },
    ourbrand: function (req, res, next) {

    var requestData = [
        needle("GET",req.protocol + "://" + req.get("host") + "/api/mainhadder"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/hadder"),
        needle("GET",req.protocol + "://" + req.get("host") + "/api/brand"),
    ]

  Promise.all(requestData).then((data) => {

res.render("web/our-brand.ejs", {
        mainhadder: data[0].body,
        hadder: data[1].body,
        brand: data[2].body,
})
}).catch((err) => {
  console.log(err);
  res.render("web/our-brand.ejs");
});
        // res.render('web/our-brand.ejs')
    },
    ourjourney: function (req, res, next) {
        res.render('web/our-journey.ejs')
    },

    pageNotFound: function (req, res, next) {
        res.render('web/404.ejs')
    },
};

module.exports = views;