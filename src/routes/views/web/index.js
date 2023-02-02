"use strict";

var csrf = require('csurf');
var csrfProtection = csrf();

var error = require("../../error");
const views = require("./views");

module.exports = function (app) {
  
    app.get('/leadership', views.leadership, error);
    app.get('/partnership', views.partnership, error);
    app.get('/about', views.about, error);
    app.get('/awards', views.awards, error);
    app.get('/csr', views.csr, error);
    app.get('/ourbrand', views.ourbrand, error);
    app.get('/ourjourney', views.ourjourney, error);
    app.get('/events', views.events, error);
    app.get('/overview', views.overview, error);
    app.get('/testimoinal', views.testimoinal, error);
    app.get('/legal', views.legal, error);
    app.get('/investor', views.investor, error);
    app.get('/finance', views.finance, error);
    app.get('/blog', views.blog, error);
    app.get('/blog-details/:id', views.blogdetails, error);

    app.get('/', views.index, error);
    app.get("*", views.pageNotFound, error);
}