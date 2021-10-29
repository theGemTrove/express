const {noAPIVersionProvided, backendWelcome} = require("../controllers/miscAction.controller");
module.exports.mountRouterToApp = App => {
  const
    apiDesignator = process.env.API_DESIGNATOR || '/api/',
    apiVersion = process.env.API_VERSION || 'v1',
    apiPrefix = `${apiDesignator}${apiVersion}`,
    routes = [''];

  // Link API Routes
  routes.forEach(route => App.use(`${apiPrefix}/${route}`, require(`./routes/${route}.route`)));

  App.use(apiDesignator, noAPIVersionProvided);
  App.use('/', backendWelcome);

  //App.use(notFound);
  //App.use(errorHandler);

  return App;
};