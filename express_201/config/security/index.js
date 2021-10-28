const {helmetize} = require("./inclusions/helmet");
module.exports.configureSecurityForApp = expressApp => {
  // "Prioritize Helmetize()" ~ PseudoSage Dustin.
  // The priority is to helmetize the app object upon invoking/building the app object.
  const App = expressApp().use(helmetize());

  // Attach Rate Limit
  require('./inclusions/rateLimit')
    .enableRateLimits(App);

  // Attach HTTP Param Pollution Protection (HPP)
  require('./inclusions/hpp')
    .enableHPP(App);

  // Attach XSS Clean
  require('./inclusions/xssClean')
    .enableXSSClean(App);

  // Attach Mongo Sanitize
  require('./inclusions/expressMongoSantize')
    .enableMongoSanitize(App);

  return App;
};