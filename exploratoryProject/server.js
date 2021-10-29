// Generate an express app with some security configurations
const
  PORT = process.env.PORT || 7780,
  express = require('express'),
  App =
    require('./config/security')
      .setSecurityDirectives(express);

// Set The Server Side Rendering Template Engine
require('./config/templateEngine')
  .configureTemplatingEngine(App, __dirname);

// Set The Application Data Converters
require('./config/dataConverters')
  .configureDataConverters(App, express);

// Open A Connection To The Application Database
//

// Create A Session For The App User
require('./config/session')
  .configureSession(App);

// Configure The App To Serve Static Assets
require('./config/staticServe')
  .serveStaticAssets(App, __dirname, express);

// Configure The App Router
require('./router')
  .mountRouterToApp(App);

App.listen(PORT, () => console.log(`App Listening On Connected P:${PORT}...`));