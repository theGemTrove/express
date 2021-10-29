const uidSafe = require('uid-safe');
const parseURL = require('parseurl');
const session = require("express-session");

module.exports.configureSession = App => {

  let sessionMeta = {
    secret: 'KeyboardKittyNinja',
    cookie: {
      genid: function(req) {
        return req.sessionId = uidSafe.sync(18);
      },
      httpOnly: (process.env.NODE_ENV !== 'production'),
      maxAge: 60000,
      secure: (process.env.NODE_ENV === 'production'),
    },
    resave: false,
    sameSite: 'strict',
    saveUninitialized: false,
  };

  App.use(session(sessionMeta));
  App.use(function (req, res, next) {
    console.log('Inside Second Session Middleware', req.session.cookie);
    if(req.session.sessionId) {
      if (!req.session.views) {
        req.session.views = {};
      }

      console.log(req.session.sessionId, req.session);
      let requestedPathname = parseURL(req).pathname;

      req.session.views[requestedPathname] = (req.session.views[requestedPathname] || 0) + 1;

    } else {
      req.session.sessionId = req.session.cookie.genid(req);
    }
    next();
  });

  return App;
};