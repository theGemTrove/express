const {noAPIVersionProvided, backendWelcome} = require("../controllers/api/miscAction.controller");
module.exports.mountRouterToApp = App => {
  const
    // => Server API
    apiDesignator = process.env.API_DESIGNATOR || '/api/',
    apiVersion = process.env.API_VERSION || 'v1',
    apiPrefix = `${apiDesignator}${apiVersion}`,
    apiRoutes = [''],
    // => Server Front End
    sfeDesignator = process.env.SFE_DESIGNATOR || '/sfe/',
    sfeVersion = process.env.SFE_VERSION || 'v1',
    sfePrefix = `${sfeDesignator}${sfeVersion}`,
    sfeRoutes = ['home'];

  // Mount all routes to the application
  apiRoutes.forEach(route => App.use(`${apiPrefix}/${route}`, require(`./routes/api/${route}.route`)));
  sfeRoutes.forEach(route => App.use(`${sfePrefix}/${route}`, require(`./routes/sfe/${route}.route`)));

  App.use(apiDesignator, noAPIVersionProvided);
  App.use('/', backendWelcome);

  //App.use(notFound);
  //App.use(errorHandler);

  return App;
};