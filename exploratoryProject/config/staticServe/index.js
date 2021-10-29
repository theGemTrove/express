module.exports.serveStaticAssets = (App, rootDir, express) => {
  const
    publicPath = rootDir + '/public',
    serveAssetOptions = {
      index:
        process.env.PUBLIC_SERVE_INDEX ||
        false,
      immutable:
        process.env.PUBLIC_SERVE_IMMUTABLE ||
        true,
      cacheControl:
        process.env.PUBLIC_SERVE_CACHE_CONTROL ||
        true,
      maxAge:
        process.env.PUBLIC_SERVE_MAX_AGE ||
        '10d'
    };

  App.use('/sfe/v1', express.static(publicPath, serveAssetOptions));

  return App;
};