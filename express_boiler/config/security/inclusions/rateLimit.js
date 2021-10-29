const expressRateLimiter = require("express-rate-limit");
module.exports.enableRateLimits = App => {
  const configurableOptions = {
    windowMS: 10 * 60 * 1000, // 10 Min
    max: 10000
  };

  App.use(expressRateLimiter(configurableOptions));

  return App;
};
