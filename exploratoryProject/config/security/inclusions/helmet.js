module.exports.helmetize = () => {
  let configurableOptions = {};
  const helmet = require('helmet');

  // Fine-Tuned CSP Options
  configurableOptions.contentSecurityPolicy = {
    useDefaults: false,
    directives: {
      defaultSrc: [
        "'self'"
      ],
      scriptSrc: [
        "'self'",
        "'unsafe-inline'"
      ]
    }
  };
  //configurableOptions.contentSecurityPolicy
  configurableOptions.contentSecurityPolicy = false;
  return helmet(configurableOptions);
};
