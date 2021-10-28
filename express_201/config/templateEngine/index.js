module.exports.configureTemplatingEngine = (App, rootProjectPath) => {
  const path = require('path');

  App.set('view engine', 'pug'); // 'ejs', 'pug', 'hbs'
  App.set('views', path.join(rootProjectPath, 'views'));

  return App;
};