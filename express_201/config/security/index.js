const {helmetize} = require("./inclusions/helmet");
module.exports.configureSecurityForApp = expressApp => {
  // "Prioritize Helmetize()" ~ PseudoSage Dustin.
  // The priority is to helmetize the app object upon invoking/building the app object.
  const SecuredExpressApp = expressApp().use(helmetize());

  // Attach Rate Limit
  require('./inclusions/rateLimit')
    .enableRateLimits(SecuredExpressApp);

  // Attach HTTP Param Pollution Protection (HPP)
  require('./inclusions/hpp')
    .enableHPP(SecuredExpressApp);

  // Attach XSS Clean
  require('./inclusions/xssClean')
    .enableXSSClean(SecuredExpressApp);

  // Attach Mongo Sanitize
  require('./inclusions/expressMongoSantize')
    .enableMongoSanitize(SecuredExpressApp);

  return SecuredExpressApp;
};