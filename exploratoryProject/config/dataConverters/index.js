module.exports.configureDataConverters = (App, express) => {

  App.use(express.json());
  App.use(express.urlencoded({extended: false}));

  return App;
};