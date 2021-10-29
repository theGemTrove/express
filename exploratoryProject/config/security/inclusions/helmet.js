module.exports.helmetize = () => {
  let configurableOptions = {};
  const helmet = require('helmet');

  // Fine-Tuned CSP Options
  configurableOptions.contentSecurityPolicy = {
    useDefaults: true,
    directives: {
      scriptSrc: ["'self'", "'unsafe-inline'"],
     /* styleSrc: ["'self'", "'unsafe-inline'"]*/
    }
  };

  return helmet(configurableOptions);
};
