const {noAPIVersionProvided, backendWelcome} = require("../controllers/api/miscAction.controller");
module.exports.mountRouterToApp = App => {
  const
    // => Server API
    apiDesignator = process.env.API_DESIGNATOR || '/api/',
    apiVersion = process.env.API_VERSION || 'v1',
    apiPrefix = `${apiDesignator}${apiVersion}`,
    apiRoutes = ['movies'],
    // => Server Front End
    sfeDesignator = process.env.SFE_DESIGNATOR || '/sfe/',
    sfeVersion = process.env.SFE_VERSION || 'v1',
    sfePrefix = `${sfeDesignator}${sfeVersion}`,
    sfeRoutes = ['home'],
    // => Server Micro Front End
    mfeDesignator = process.env.MFE_DESIGNATOR || '/mfe/',
    mfeVersion = process.env.MFE_VERSION || 'v1',
    mfePrefix = `${mfeDesignator}${mfeVersion}`,
    mfeRoutes = ['movie'];

  // Mount all routes to the application
  apiRoutes.forEach(route => App.use(`${apiPrefix}/${route}`, require(`./routes/api/${route}.route`)));
  sfeRoutes.forEach(route => App.use(`${sfePrefix}/${route}`, require(`./routes/sfe/${route}.route`)));
  mfeRoutes.forEach(route => App.use(`${mfePrefix}/${route}`, require(`./routes/mfe/${route}.route`)));

  App.use(apiDesignator, noAPIVersionProvided);
  App.use('/', backendWelcome);

  //App.use(notFound);
  //App.use(errorHandler);

  return App;
};