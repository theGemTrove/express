const mongoSanitize = require("express-mongo-sanitize");
module.exports.enableMongoSanitize = App => {
  //const configurableOptions = {};

  App.use(mongoSanitize());

  return App;
};