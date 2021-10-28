const hpp = require("hpp");
module.exports.enableHPP = App => {
  //const configurableOptions = {};

  App.use(hpp());

  return App;
};
