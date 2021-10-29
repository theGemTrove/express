module.exports.serveStaticAssets = (App, rootDir, express) => {
  const
    publicPath = rootDir + '/public',
    serveAssetOptions = {
      index: false,
      immutable: true,
      cacheControl: true,
      maxAge: '10d'
    };

  App.use(express.static(publicPath, serveAssetOptions));

  return App;
};