'use strict';

var csrf = require('csurf');
var csrfProtection = csrf();
var error = require('../../error');
var auth = require('../../auth/authenticate');
var users = require('./users.js');
var homebanner = require('./homebanner')
var about = require('./about')
var core = require('./core')
var awards = require('./awards')
var leadership = require('./leadership')
var corporate = require('./corporate')
var pluse = require('./pluse');
var innovation = require('./innovation');
var foundation = require('./foundation');
var footer = require('./footer');
var investor = require('./investor');
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
     //GET ROUTES
    app.get('/cms/login', csrfProtection, users.login, error);
    app.get('/cms/logout', users.logout, error);
    app.get('/cms/dashboard', auth.checkSessionUser, users.dashboard, error);

    app.get('/cms/homebanner/add', auth.checkSessionUser,auth.checkAccessControl, homebanner.add,error);
    app.get('/cms/homebanner/manage', auth.checkSessionUser,auth.checkAccessControl, homebanner.manage,error);
    app.get('/cms/homebanner/edit/:id', auth.checkSessionUser, auth.checkAccessControl,homebanner.edit, error);

    app.get('/cms/about/add', auth.checkSessionUser,auth.checkAccessControl, about.add,error);
    app.get('/cms/about/manage', auth.checkSessionUser,auth.checkAccessControl, about.manage,error);
    app.get('/cms/about/edit/:id', auth.checkSessionUser, auth.checkAccessControl,about.edit, error);

    app.get('/cms/core/add', auth.checkSessionUser,auth.checkAccessControl, core.add,error);
    app.get('/cms/core/manage', auth.checkSessionUser,auth.checkAccessControl, core.manage,error);
    app.get('/cms/core/edit/:id', auth.checkSessionUser, auth.checkAccessControl,core.edit, error);

    app.get('/cms/awards/add', auth.checkSessionUser,auth.checkAccessControl, awards.add,error);
    app.get('/cms/awards/manage', auth.checkSessionUser,auth.checkAccessControl, awards.manage,error);
    app.get('/cms/awards/edit/:id', auth.checkSessionUser, auth.checkAccessControl,awards.edit, error);

    app.get('/cms/leadership/add', auth.checkSessionUser,auth.checkAccessControl, leadership.add,error);
    app.get('/cms/leadership/manage', auth.checkSessionUser,auth.checkAccessControl, leadership.manage,error);
    app.get('/cms/leadership/edit/:id', auth.checkSessionUser, auth.checkAccessControl,leadership.edit, error);

    app.get('/cms/corporate/add', auth.checkSessionUser,auth.checkAccessControl, corporate.add,error);
    app.get('/cms/corporate/manage', auth.checkSessionUser,auth.checkAccessControl, corporate.manage,error);
    app.get('/cms/corporate/edit/:id', auth.checkSessionUser, auth.checkAccessControl,corporate.edit, error);

    app.get('/cms/pluse/add', auth.checkSessionUser,auth.checkAccessControl, pluse.add,error);
    app.get('/cms/pluse/manage', auth.checkSessionUser,auth.checkAccessControl, pluse.manage,error);
    app.get('/cms/pluse/edit/:id', auth.checkSessionUser, auth.checkAccessControl,pluse.edit, error);

    app.get('/cms/innovation/add', auth.checkSessionUser,auth.checkAccessControl, innovation.add,error);
    app.get('/cms/innovation/manage', auth.checkSessionUser,auth.checkAccessControl, innovation.manage,error);
    app.get('/cms/innovation/edit/:id', auth.checkSessionUser, auth.checkAccessControl,innovation.edit, error);    

    app.get('/cms/footer/add', auth.checkSessionUser,auth.checkAccessControl, footer.add,error);
    app.get('/cms/footer/manage', auth.checkSessionUser,auth.checkAccessControl, footer.manage,error);
    app.get('/cms/footer/edit/:id', auth.checkSessionUser, auth.checkAccessControl,footer.edit, error);      

    app.get('/cms/foundation/add', auth.checkSessionUser,auth.checkAccessControl, foundation.add,error);
    app.get('/cms/foundation/manage', auth.checkSessionUser,auth.checkAccessControl, foundation.manage,error);
    app.get('/cms/foundation/edit/:id', auth.checkSessionUser, auth.checkAccessControl,foundation.edit, error);    

    app.get('/cms/investor/add', auth.checkSessionUser,auth.checkAccessControl, investor.add,error);
    app.get('/cms/investor/manage', auth.checkSessionUser,auth.checkAccessControl, investor.manage,error);
    app.get('/cms/investor/edit/:id', auth.checkSessionUser, auth.checkAccessControl,investor.edit, error);    

    app.get('/cms/staticpages/add', auth.checkSessionUser,auth.checkAccessControl, staticpages.add,error);
    app.get('/cms/staticpages/manage', auth.checkSessionUser,auth.checkAccessControl, staticpages.manage,error);
    app.get('/cms/staticpages/edit/:id', auth.checkSessionUser,auth.checkAccessControl, staticpages.edit, error);

    app.get('/cms/staticcontent/add', auth.checkSessionUser,auth.checkAccessControl, staticcontent.add,error);
    app.get('/cms/staticcontent/manage', auth.checkSessionUser,auth.checkAccessControl, staticcontent.manage,error);
    app.get('/cms/staticcontent/edit/:id', auth.checkSessionUser,auth.checkAccessControl, staticcontent.edit, error);

    app.get('/cms/hadder/add', auth.checkSessionUser,auth.checkAccessControl, hadder.add,error);
    app.get('/cms/hadder/manage', auth.checkSessionUser,auth.checkAccessControl, hadder.manage,error);
    app.get('/cms/hadder/edit/:id', auth.checkSessionUser,auth.checkAccessControl, hadder.edit, error);

    app.get('/cms/mainhadder/add', auth.checkSessionUser,auth.checkAccessControl, mainhadder.add,error);
    app.get('/cms/mainhadder/manage', auth.checkSessionUser,auth.checkAccessControl, mainhadder.manage,error);
    app.get('/cms/mainhadder/edit/:id', auth.checkSessionUser,auth.checkAccessControl, mainhadder.edit, error);

    app.get('/cms/leadershipbanner/add', auth.checkSessionUser,auth.checkAccessControl, leadershipbanner.add,error);
    app.get('/cms/leadershipbanner/manage', auth.checkSessionUser,auth.checkAccessControl, leadershipbanner.manage,error);
    app.get('/cms/leadershipbanner/edit/:id', auth.checkSessionUser,auth.checkAccessControl, leadershipbanner.edit, error);

    app.get('/cms/leadershippage/add', auth.checkSessionUser,auth.checkAccessControl, leadershippage.add,error);
    app.get('/cms/leadershippage/manage', auth.checkSessionUser,auth.checkAccessControl, leadershippage.manage,error);
    app.get('/cms/leadershippage/edit/:id', auth.checkSessionUser,auth.checkAccessControl, leadershippage.edit, error);

    app.get('/cms/leadershipfeature/add', auth.checkSessionUser,auth.checkAccessControl, leadershipfeature.add,error);
    app.get('/cms/leadershipfeature/manage', auth.checkSessionUser,auth.checkAccessControl, leadershipfeature.manage,error);
    app.get('/cms/leadershipfeature/edit/:id', auth.checkSessionUser,auth.checkAccessControl, leadershipfeature.edit, error);

    app.get('/cms/brand/add', auth.checkSessionUser,auth.checkAccessControl, brand.add,error);
    app.get('/cms/brand/manage', auth.checkSessionUser,auth.checkAccessControl, brand.manage,error);
    app.get('/cms/brand/edit/:id', auth.checkSessionUser,auth.checkAccessControl, brand.edit, error);

    app.get('/cms/partnership/add', auth.checkSessionUser,auth.checkAccessControl, partnership.add,error);
    app.get('/cms/partnership/manage', auth.checkSessionUser,auth.checkAccessControl, partnership.manage,error);
    app.get('/cms/partnership/edit/:id', auth.checkSessionUser,auth.checkAccessControl, partnership.edit, error);

    app.get('/cms/currentpatner/add', auth.checkSessionUser,auth.checkAccessControl, currentpatner.add,error);
    app.get('/cms/currentpatner/manage', auth.checkSessionUser,auth.checkAccessControl, currentpatner.manage,error);
    app.get('/cms/currentpatner/edit/:id', auth.checkSessionUser,auth.checkAccessControl, currentpatner.edit, error);

    app.get('/cms/partnersfeature/add', auth.checkSessionUser,auth.checkAccessControl, partnersfeature.add,error);
    app.get('/cms/partnersfeature/manage', auth.checkSessionUser,auth.checkAccessControl, partnersfeature.manage,error);
    app.get('/cms/partnersfeature/edit/:id', auth.checkSessionUser,auth.checkAccessControl, partnersfeature.edit, error);

    app.get('/cms/events/add', auth.checkSessionUser,auth.checkAccessControl, events.add,error);
    app.get('/cms/events/manage', auth.checkSessionUser,auth.checkAccessControl, events.manage,error);
    app.get('/cms/events/edit/:id', auth.checkSessionUser,auth.checkAccessControl, events.edit, error);

    app.get('/cms/news/add', auth.checkSessionUser,auth.checkAccessControl, news.add,error);
    app.get('/cms/news/manage', auth.checkSessionUser,auth.checkAccessControl, news.manage,error);
    app.get('/cms/news/edit/:id', auth.checkSessionUser,auth.checkAccessControl, news.edit, error);

    app.get('/cms/eventsbanner/add', auth.checkSessionUser,auth.checkAccessControl, eventsbanner.add,error);
    app.get('/cms/eventsbanner/manage', auth.checkSessionUser,auth.checkAccessControl, eventsbanner.manage,error);
    app.get('/cms/eventsbanner/edit/:id', auth.checkSessionUser,auth.checkAccessControl, eventsbanner.edit, error);

    app.get('/cms/overview/add', auth.checkSessionUser,auth.checkAccessControl, overview.add,error);
    app.get('/cms/overview/manage', auth.checkSessionUser,auth.checkAccessControl, overview.manage,error);
    app.get('/cms/overview/edit/:id', auth.checkSessionUser,auth.checkAccessControl, overview.edit, error);

    app.get('/cms/blogs/add', auth.checkSessionUser,auth.checkAccessControl, blogs.add,error);
    app.get('/cms/blogs/manage', auth.checkSessionUser,auth.checkAccessControl, blogs.manage,error);
    app.get('/cms/blogs/edit/:id', auth.checkSessionUser,auth.checkAccessControl, blogs.edit, error);

    app.get('/cms/financials/add', auth.checkSessionUser,auth.checkAccessControl, financials.add,error);
    app.get('/cms/financials/manage', auth.checkSessionUser,auth.checkAccessControl, financials.manage,error);
    app.get('/cms/financials/edit/:id', auth.checkSessionUser,auth.checkAccessControl, financials.edit, error);


  //testimonial
  app.get(
    "/cms/testimonial/manage",
    auth.checkSessionUser,
    auth.checkAccessControl,
    testimonial.manage,
    error
  );
  app.get(
    "/cms/testimonial/edit/:id",
    auth.checkSessionUser,
    auth.checkAccessControl,
    testimonial.edit,
    error
  );
  app.post("/cms/testimonial/add", auth.checkSessionUser, testimonial.addPost, error);
  app.post(
    "/cms/testimonial/edit/:id",
    auth.checkSessionUser,
    testimonial.editPost,
    error
  );
  app.post(
    "/cms/testimonial/delete",
    auth.checkSessionUser,
    testimonial.deletePost,
    error
  );
  app.get(
    "/cms/testimonial/add",
    auth.checkSessionUser,
    auth.checkAccessControl,
    testimonial.add,
    error
  );
  app.post("/cms/testimonial/add", auth.checkSessionUser, testimonial.addPost, error);
  app.post(
    "/cms/testimonial/edit/:id",
    auth.checkSessionUser,
    testimonial.editPost,
    error
  );





    app.post('/cms/login', csrfProtection, users.loginPost, error);

    app.post('/cms/homebanner/add', auth.checkSessionUser, homebanner.addPost,error);
    app.post('/cms/homebanner/edit/:id', auth.checkSessionUser, homebanner.editPost, error);
    app.post('/cms/homebanner/delete', auth.checkSessionUser, homebanner.deletePost, error);

    app.post('/cms/about/add', auth.checkSessionUser, about.addPost,error);
    app.post('/cms/about/edit/:id', auth.checkSessionUser, about.editPost, error);
    app.post('/cms/about/delete', auth.checkSessionUser, about.deletePost, error);
    
    app.post('/cms/core/add', auth.checkSessionUser, core.addPost,error);
    app.post('/cms/core/edit/:id', auth.checkSessionUser, core.editPost, error);
    app.post('/cms/core/delete', auth.checkSessionUser, core.deletePost, error);

    app.post('/cms/awards/add', auth.checkSessionUser, awards.addPost,error);
    app.post('/cms/awards/edit/:id', auth.checkSessionUser, awards.editPost, error);
    app.post('/cms/awards/delete', auth.checkSessionUser, awards.deletePost, error);

    app.post('/cms/leadership/add', auth.checkSessionUser, leadership.addPost,error);
    app.post('/cms/leadership/edit/:id', auth.checkSessionUser, leadership.editPost, error);
    app.post('/cms/leadership/delete', auth.checkSessionUser, leadership.deletePost, error);

    app.post('/cms/corporate/add', auth.checkSessionUser, corporate.addPost,error);
    app.post('/cms/corporate/edit/:id', auth.checkSessionUser, corporate.editPost, error);
    app.post('/cms/corporate/delete', auth.checkSessionUser, corporate.deletePost, error);

    app.post('/cms/pluse/add', auth.checkSessionUser, pluse.addPost,error);
    app.post('/cms/pluse/edit/:id', auth.checkSessionUser, pluse.editPost, error);
    app.post('/cms/pluse/delete', auth.checkSessionUser, pluse.deletePost, error);

    app.post('/cms/innovation/add', auth.checkSessionUser, innovation.addPost,error);
    app.post('/cms/innovation/edit/:id', auth.checkSessionUser, innovation.editPost, error);
    app.post('/cms/innovation/delete', auth.checkSessionUser, innovation.deletePost, error);

    app.post('/cms/foundation/add', auth.checkSessionUser, foundation.addPost,error);
    app.post('/cms/foundation/edit/:id', auth.checkSessionUser, foundation.editPost, error);
    app.post('/cms/foundation/delete', auth.checkSessionUser, foundation.deletePost, error);

    app.post('/cms/footer/add', auth.checkSessionUser, footer.addPost,error);
    app.post('/cms/footer/edit/:id', auth.checkSessionUser, footer.editPost, error);
    app.post('/cms/footer/delete', auth.checkSessionUser, footer.deletePost, error);

    app.post('/cms/investor/add', auth.checkSessionUser, investor.addPost,error);
    app.post('/cms/investor/edit/:id', auth.checkSessionUser, investor.editPost, error);
    app.post('/cms/investor/delete', auth.checkSessionUser, investor.deletePost, error);

    app.post('/cms/staticpages/add', auth.checkSessionUser, staticpages.addPost,error);
    app.post('/cms/staticpages/edit/:id', auth.checkSessionUser, staticpages.editPost, error);
    app.post('/cms/staticpages/delete', auth.checkSessionUser, staticpages.deletePost, error);

    app.post('/cms/staticcontent/add', auth.checkSessionUser, staticcontent.addPost,error);
    app.post('/cms/staticcontent/edit/:id', auth.checkSessionUser, staticcontent.editPost, error);
    app.post('/cms/staticcontent/delete', auth.checkSessionUser, staticcontent.deletePost, error);

    app.post('/cms/hadder/add', auth.checkSessionUser, hadder.addPost,error);
    app.post('/cms/hadder/edit/:id', auth.checkSessionUser, hadder.editPost, error);
    app.post('/cms/hadder/delete', auth.checkSessionUser, hadder.deletePost, error);

    app.post('/cms/mainhadder/add', auth.checkSessionUser, mainhadder.addPost,error);
    app.post('/cms/mainhadder/edit/:id', auth.checkSessionUser, mainhadder.editPost, error);
    app.post('/cms/mainhadder/delete', auth.checkSessionUser, mainhadder.deletePost, error);

    app.post('/cms/leadershipbanner/add', auth.checkSessionUser, leadershipbanner.addPost,error);
    app.post('/cms/leadershipbanner/edit/:id', auth.checkSessionUser, leadershipbanner.editPost, error);
    app.post('/cms/leadershipbanner/delete', auth.checkSessionUser, leadershipbanner.deletePost, error);

    app.post('/cms/leadershippage/add', auth.checkSessionUser, leadershippage.addPost,error);
    app.post('/cms/leadershippage/edit/:id', auth.checkSessionUser, leadershippage.editPost, error);
    app.post('/cms/leadershippage/delete', auth.checkSessionUser, leadershippage.deletePost, error);

    app.post('/cms/leadershipfeature/add', auth.checkSessionUser, leadershipfeature.addPost,error);
    app.post('/cms/leadershipfeature/edit/:id', auth.checkSessionUser, leadershipfeature.editPost, error);
    app.post('/cms/leadershipfeature/delete', auth.checkSessionUser, leadershipfeature.deletePost, error);

    app.post('/cms/brand/add', auth.checkSessionUser, brand.addPost,error);
    app.post('/cms/brand/edit/:id', auth.checkSessionUser, brand.editPost, error);
    app.post('/cms/brand/delete', auth.checkSessionUser, brand.deletePost, error);

    app.post('/cms/partnership/add', auth.checkSessionUser, partnership.addPost,error);
    app.post('/cms/partnership/edit/:id', auth.checkSessionUser, partnership.editPost, error);
    app.post('/cms/partnership/delete', auth.checkSessionUser, partnership.deletePost, error);

    app.post('/cms/currentpatner/add', auth.checkSessionUser, currentpatner.addPost,error);
    app.post('/cms/currentpatner/edit/:id', auth.checkSessionUser, currentpatner.editPost, error);
    app.post('/cms/currentpatner/delete', auth.checkSessionUser, currentpatner.deletePost, error);

    app.post('/cms/partnersfeature/add', auth.checkSessionUser, partnersfeature.addPost,error);
    app.post('/cms/partnersfeature/edit/:id', auth.checkSessionUser, partnersfeature.editPost, error);
    app.post('/cms/partnersfeature/delete', auth.checkSessionUser, partnersfeature.deletePost, error);

    app.post('/cms/events/add', auth.checkSessionUser, events.addPost,error);
    app.post('/cms/events/edit/:id', auth.checkSessionUser, events.editPost, error);
    app.post('/cms/events/delete', auth.checkSessionUser, events.deletePost, error);

    app.post('/cms/news/add', auth.checkSessionUser, news.addPost,error);
    app.post('/cms/news/edit/:id', auth.checkSessionUser, news.editPost, error);
    app.post('/cms/news/delete', auth.checkSessionUser, news.deletePost, error);

    app.post('/cms/eventsbanner/add', auth.checkSessionUser, eventsbanner.addPost,error);
    app.post('/cms/eventsbanner/edit/:id', auth.checkSessionUser, eventsbanner.editPost, error);
    app.post('/cms/eventsbanner/delete', auth.checkSessionUser, eventsbanner.deletePost, error);

    app.post('/cms/overview/add', auth.checkSessionUser, overview.addPost,error);
    app.post('/cms/overview/edit/:id', auth.checkSessionUser, overview.editPost, error);
    app.post('/cms/overview/delete', auth.checkSessionUser, overview.deletePost, error);

    app.post('/cms/blogs/add', auth.checkSessionUser, blogs.addPost,error);
    app.post('/cms/blogs/edit/:id', auth.checkSessionUser, blogs.editPost, error);
    app.post('/cms/blogs/delete', auth.checkSessionUser, blogs.deletePost, error);

    app.post('/cms/financials/add', auth.checkSessionUser, financials.addPost,error);
    app.post('/cms/financials/edit/:id', auth.checkSessionUser, financials.editPost, error);
    app.post('/cms/financials/delete', auth.checkSessionUser, financials.deletePost, error);
};
