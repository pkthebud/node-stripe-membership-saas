'use strict';

var secrets = require('../config/secrets');

module.exports = function(req, res, next) {
  res.locals.path = req.path;
  res.locals.googleAnalytics = secrets.googleAnalytics;
  res.locals.saasMultipass = secrets.sitename;
  res.locals.hometitle = secrets.hometitle;
  next();
};
