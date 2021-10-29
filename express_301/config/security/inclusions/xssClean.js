const xssClean = require("xss-clean");
module.exports.enableXSSClean = App => {
  //const configurableOptions = {};

  App.use(xssClean());

  return App;
};