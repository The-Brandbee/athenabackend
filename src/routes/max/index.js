"use strict";
var error = require("../error");
var auth = require("../auth/authenticate");
var homebanner = require("./homebanner.js");
var about = require("./about")
var core = require("./core")
var awards = require("./awards")
var leadership = require("./leadership")
var corporate = require("./corporate")
var pluse = require("./pluse");
var innovation = require("./innovation");
var foundation = require("./foundation");
var footer = require("./footer");
var investor = require("./investor");
var staticpages = require('./staticpages.js');
var staticcontent = require('./staticcontent.js');
var hadder = require('./hadder.js');
var mainhadder = require('./mainhadder.js');
var leadershipbanner = require('./leadershipbanner.js');
var leadershippage = require('./leadershippage.js');
var leadershipfeature = require('./leadershipfeature.js');
var brand = require('./brand.js');
var partnership = require('./partnership.js');
var currentpatner = require('./currentpatner.js');
var partnersfeature = require('./partnersfeature.js');
var events = require('./events.js');
var news = require('./news.js');
var eventsbanner = require('./eventsbanner.js');
var overview = require('./overview.js');
var testimonial = require('./testimonial');
var blogs = require('./blogs');
var financials = require('./financials');

module.exports = function(app) {
    //get routes

    app.get("/api/homebanner", homebanner.fetchAll, error);
    app.get("/api/homebanner/:id", homebanner.fetchById, error);

    app.get("/api/about", about.fetchAll, error);
    app.get("/api/about/:id", about.fetchById, error);

    app.get("/api/core", core.fetchAll, error);
    app.get("/api/core/:id", core.fetchById, error);

    app.get("/api/awards", awards.fetchAll, error);
    app.get("/api/awards/:id", awards.fetchById, error);

    app.get("/api/leadership", leadership.fetchAll, error);
    app.get("/api/leadership/:id", leadership.fetchById, error);

    app.get("/api/corporate", corporate.fetchAll, error);
    app.get("/api/corporate/:id", corporate.fetchById, error);

    app.get("/api/pluse", pluse.fetchAll, error);
    app.get("/api/pluse/:id", pluse.fetchById, error);

    app.get("/api/innovation", innovation.fetchAll, error);
    app.get("/api/innovation/:id", innovation.fetchById, error);

    app.get("/api/foundation", foundation.fetchAll, error);
    app.get("/api/foundation/:id", foundation.fetchById, error);

    app.get("/api/footer", footer.fetchAll, error);
    app.get("/api/footer/:id", footer.fetchById, error);

    app.get("/api/investor", investor.fetchAll, error);
    app.get("/api/investor/:id", investor.fetchById, error);

    app.get("/api/staticpages", staticpages.fetchAll, error);
    app.get("/api/staticpages/:id", staticpages.fetchById, error);
    app.get("/api/staticpages/serachbyurl/:url", staticpages.fetchByUrl,error);

    app.get("/api/staticcontent", staticcontent.fetchAll, error);
    app.get("/api/staticcontent/:id", staticcontent.fetchById, error);

    app.get("/api/hadder", hadder.fetchAll, error);
    app.get("/api/hadder/:id", hadder.fetchById, error);

    app.get("/api/mainhadder", mainhadder.fetchAll, error);
    app.get("/api/mainhadder/:id", mainhadder.fetchById, error);

    app.get("/api/leadershipbanner", leadershipbanner.fetchAll, error);
    app.get("/api/leadershipbanner/:id", leadershipbanner.fetchById, error);

    app.get("/api/leadershippage", leadershippage.fetchAll, error);
    app.get("/api/leadershippage/:id", leadershippage.fetchById, error);

    app.get("/api/leadershipfeature", leadershipfeature.fetchAll, error);
    app.get("/api/leadershipfeature/:id", leadershipfeature.fetchById, error);

    app.get("/api/brand", brand.fetchAll, error);
    app.get("/api/brand/:id", brand.fetchById, error);

    app.get("/api/partnership", partnership.fetchAll, error);
    app.get("/api/partnership/:id", partnership.fetchById, error);

    app.get("/api/currentpatner", currentpatner.fetchAll, error);
    app.get("/api/currentpatner/:id", currentpatner.fetchById, error);

    app.get("/api/partnersfeature", partnersfeature.fetchAll, error);
    app.get("/api/partnersfeature/:id", partnersfeature.fetchById, error);

    app.get("/api/events", events.fetchAll, error);
    app.get("/api/events/:id", events.fetchById, error);

    app.get("/api/news", news.fetchAll, error);
    app.get("/api/news/:id", news.fetchById, error);

    app.get("/api/eventsbanner", eventsbanner.fetchAll, error);
    app.get("/api/eventsbanner/:id", eventsbanner.fetchById, error);

    app.get("/api/financials", financials.fetchAll, error);
    app.get("/api/financials/:id", financials.fetchById, error);

    app.get("/api/overview", overview.fetchAll, error);
    app.get("/api/overview/:id", overview.fetchById, error);

    app.get("/api/blogs", blogs.fetchAll, error);
    app.get("/api/blogs/:id", blogs.fetchById, error);
    app.get("/api/blogsdetails/:id", blogs.fetchByBlog, error);

  //testimonial
  app.get("/api/testimonial", testimonial.fetchAll, error);
  app.get("/api/testimonial/:id", testimonial.fetchById, error);



  app.post(
    "/api/testimonial/add",
    auth.checkSessionUser,
    auth.checkAccessControl,
    testimonial.add,
    error   
  );
  app.post(
    "/api/testimonial/update",
    auth.checkSessionUser,
    auth.checkAccessControl,
    testimonial.update,
    error
  );
  app.post(
    "/api/testimonial/delete",
    auth.checkSessionUser,
    auth.checkAccessControl,
    testimonial.delete,
    error
  );









    app.post("/api/homebanner/add",auth.checkSessionUser,auth.checkAccessControl,homebanner.add,error);
    app.post("/api/homebanner/update", auth.checkSessionUser,auth.checkAccessControl, homebanner.update, error);
    app.post("/api/homebanner/delete",auth.checkSessionUser,auth.checkAccessControl,homebanner.delete,error);
 
    app.post("/api/about/add",auth.checkSessionUser,auth.checkAccessControl,about.add,error);
    app.post("/api/about/update", auth.checkSessionUser,auth.checkAccessControl, about.update, error);
    app.post("/api/about/delete",auth.checkSessionUser,auth.checkAccessControl,about.delete,error);

    app.post("/api/core/add",auth.checkSessionUser,auth.checkAccessControl,core.add,error);
    app.post("/api/core/update", auth.checkSessionUser,auth.checkAccessControl, core.update, error);
    app.post("/api/core/delete",auth.checkSessionUser,auth.checkAccessControl,core.delete,error);

    app.post("/api/awards/add",auth.checkSessionUser,auth.checkAccessControl,awards.add,error);
    app.post("/api/awards/update", auth.checkSessionUser,auth.checkAccessControl, awards.update, error);
    app.post("/api/awards/delete",auth.checkSessionUser,auth.checkAccessControl,awards.delete,error);

    app.post("/api/leadership/add",auth.checkSessionUser,auth.checkAccessControl,leadership.add,error);
    app.post("/api/leadership/update", auth.checkSessionUser,auth.checkAccessControl, leadership.update, error);
    app.post("/api/leadership/delete",auth.checkSessionUser,auth.checkAccessControl,leadership.delete,error);

    app.post("/api/corporate/add",auth.checkSessionUser,auth.checkAccessControl,corporate.add,error);
    app.post("/api/corporate/update", auth.checkSessionUser,auth.checkAccessControl, corporate.update, error);
    app.post("/api/corporate/delete",auth.checkSessionUser,auth.checkAccessControl,corporate.delete,error);    

    app.post("/api/pluse/add",auth.checkSessionUser,auth.checkAccessControl, pluse.add,error);
    app.post("/api/pluse/update", auth.checkSessionUser,auth.checkAccessControl, pluse.update, error);
    app.post("/api/pluse/delete",auth.checkSessionUser,auth.checkAccessControl,pluse.delete,error);  
    
    app.post("/api/innovation/add",auth.checkSessionUser,auth.checkAccessControl, innovation.add,error);
    app.post("/api/innovation/update", auth.checkSessionUser,auth.checkAccessControl, innovation.update, error);
    app.post("/api/innovation/delete",auth.checkSessionUser,auth.checkAccessControl,innovation.delete,error);
    
    app.post("/api/foundation/add",auth.checkSessionUser,auth.checkAccessControl, foundation.add,error);
    app.post("/api/foundation/update", auth.checkSessionUser,auth.checkAccessControl, foundation.update, error);
    app.post("/api/foundation/delete",auth.checkSessionUser,auth.checkAccessControl,foundation.delete,error);  
    
    app.post("/api/footer/add",auth.checkSessionUser,auth.checkAccessControl, footer.add,error);
    app.post("/api/footer/update", auth.checkSessionUser,auth.checkAccessControl, footer.update, error);
    app.post("/api/footer/delete",auth.checkSessionUser,auth.checkAccessControl,footer.delete,error);    

    app.post("/api/investor/add",auth.checkSessionUser,auth.checkAccessControl, investor.add,error);
    app.post("/api/investor/update", auth.checkSessionUser,auth.checkAccessControl, investor.update, error);
    app.post("/api/investor/delete",auth.checkSessionUser,auth.checkAccessControl,investor.delete,error);    

    app.post("/api/staticpages/add",auth.checkSessionUser,auth.checkAccessControl,staticpages.add,error);
    app.post("/api/staticpages/update", auth.checkSessionUser,auth.checkAccessControl, staticpages.update, error);
    app.post("/api/staticpages/delete",auth.checkSessionUser,auth.checkAccessControl,staticpages.delete,error);

    app.post("/api/staticcontent/add",auth.checkSessionUser,auth.checkAccessControl,staticcontent.add,error);
    app.post("/api/staticcontent/update", auth.checkSessionUser,auth.checkAccessControl, staticcontent.update, error);
    app.post("/api/staticcontent/delete",auth.checkSessionUser,auth.checkAccessControl,staticcontent.delete,error);

    app.post("/api/hadder/add",auth.checkSessionUser,auth.checkAccessControl,hadder.add,error);
    app.post("/api/hadder/update", auth.checkSessionUser,auth.checkAccessControl, hadder.update, error);
    app.post("/api/hadder/delete",auth.checkSessionUser,auth.checkAccessControl,hadder.delete,error);

    app.post("/api/mainhadder/add",auth.checkSessionUser,auth.checkAccessControl,mainhadder.add,error);
    app.post("/api/mainhadder/update", auth.checkSessionUser,auth.checkAccessControl, mainhadder.update, error);
    app.post("/api/mainhadder/delete",auth.checkSessionUser,auth.checkAccessControl,mainhadder.delete,error);

    app.post("/api/leadershipbanner/add",auth.checkSessionUser,auth.checkAccessControl,leadershipbanner.add,error);
    app.post("/api/leadershipbanner/update", auth.checkSessionUser,auth.checkAccessControl, leadershipbanner.update, error);
    app.post("/api/leadershipbanner/delete",auth.checkSessionUser,auth.checkAccessControl,leadershipbanner.delete,error);

    app.post("/api/leadershippage/add",auth.checkSessionUser,auth.checkAccessControl,leadershippage.add,error);
    app.post("/api/leadershippage/update", auth.checkSessionUser,auth.checkAccessControl, leadershippage.update, error);
    app.post("/api/leadershippage/delete",auth.checkSessionUser,auth.checkAccessControl,leadershippage.delete,error);

    app.post("/api/leadershippage/add",auth.checkSessionUser,auth.checkAccessControl,leadershippage.add,error);
    app.post("/api/leadershippage/update", auth.checkSessionUser,auth.checkAccessControl, leadershippage.update, error);
    app.post("/api/leadershippage/delete",auth.checkSessionUser,auth.checkAccessControl,leadershippage.delete,error);

    app.post("/api/leadershipfeature/add",auth.checkSessionUser,auth.checkAccessControl,leadershipfeature.add,error);
    app.post("/api/leadershipfeature/update", auth.checkSessionUser,auth.checkAccessControl, leadershipfeature.update, error);
    app.post("/api/leadershipfeature/delete",auth.checkSessionUser,auth.checkAccessControl,leadershipfeature.delete,error);

    app.post("/api/brand/add",auth.checkSessionUser,auth.checkAccessControl,brand.add,error);
    app.post("/api/brand/update", auth.checkSessionUser,auth.checkAccessControl, brand.update, error);
    app.post("/api/brand/delete",auth.checkSessionUser,auth.checkAccessControl,brand.delete,error);

    app.post("/api/partnership/add",auth.checkSessionUser,auth.checkAccessControl,partnership.add,error);
    app.post("/api/partnership/update", auth.checkSessionUser,auth.checkAccessControl, partnership.update, error);
    app.post("/api/partnership/delete",auth.checkSessionUser,auth.checkAccessControl,partnership.delete,error);

    app.post("/api/currentpatner/add",auth.checkSessionUser,auth.checkAccessControl,currentpatner.add,error);
    app.post("/api/currentpatner/update", auth.checkSessionUser,auth.checkAccessControl, currentpatner.update, error);
    app.post("/api/currentpatner/delete",auth.checkSessionUser,auth.checkAccessControl,currentpatner.delete,error);

    app.post("/api/partnersfeature/add",auth.checkSessionUser,auth.checkAccessControl,partnersfeature.add,error);
    app.post("/api/partnersfeature/update", auth.checkSessionUser,auth.checkAccessControl, partnersfeature.update, error);
    app.post("/api/partnersfeature/delete",auth.checkSessionUser,auth.checkAccessControl,partnersfeature.delete,error);
    
    app.post("/api/events/add",auth.checkSessionUser,auth.checkAccessControl,events.add,error);
    app.post("/api/events/update", auth.checkSessionUser,auth.checkAccessControl, events.update, error);
    app.post("/api/events/delete",auth.checkSessionUser,auth.checkAccessControl,events.delete,error);

    app.post("/api/news/add",auth.checkSessionUser,auth.checkAccessControl,news.add,error);
    app.post("/api/news/update", auth.checkSessionUser,auth.checkAccessControl, news.update, error);
    app.post("/api/news/delete",auth.checkSessionUser,auth.checkAccessControl,news.delete,error);
        
    app.post("/api/eventsbanner/add",auth.checkSessionUser,auth.checkAccessControl,eventsbanner.add,error);
    app.post("/api/eventsbanner/update", auth.checkSessionUser,auth.checkAccessControl, eventsbanner.update, error);
    app.post("/api/eventsbanner/delete",auth.checkSessionUser,auth.checkAccessControl,eventsbanner.delete,error);

    app.post("/api/overview/add",auth.checkSessionUser,auth.checkAccessControl,overview.add,error);
    app.post("/api/overview/update", auth.checkSessionUser,auth.checkAccessControl, overview.update, error);
    app.post("/api/overview/delete",auth.checkSessionUser,auth.checkAccessControl,overview.delete,error);

    app.post("/api/blogs/add",auth.checkSessionUser,auth.checkAccessControl,blogs.add,error);
    app.post("/api/blogs/update", auth.checkSessionUser,auth.checkAccessControl, blogs.update, error);
    app.post("/api/blogs/delete",auth.checkSessionUser,auth.checkAccessControl,blogs.delete,error);

    app.post("/api/financials/add",auth.checkSessionUser,auth.checkAccessControl,financials.add,error);
    app.post("/api/financials/update", auth.checkSessionUser,auth.checkAccessControl, financials.update, error);
    app.post("/api/financials/delete",auth.checkSessionUser,auth.checkAccessControl,financials.delete,error);
    
};