const
  PORT = process.env.PORT || 7774,
  express = require('express'),
  app = express();

// Express Does 2 Things Really Well
// 1. Routing
// 2. Middleware

// Req -------Middleware------> Res
// A Middleware Function is any Function that has access to the Req, Res, and Next Objects
// 1. Request comes in.
// 2. We need to validate the user sometimes, or,
// 3. We need something from the DB, or,
// 4. If there is data from the user we need to parse it and store it
// 5. Res

const middlewareExample = (req, res, next) => {
  // get info out of the req object, or,
  // perform a DB Op.
  res.locals.middlewareExampleRan = true;
  console.log("MiddlewareExample Has Been Run...");
  next();
};

app.use('/runMiddleware', middlewareExample);

app.get('/', (req, res, next) => {
  res.send('Home Route');
  console.log(res.locals.middlewareExampleRan);
});

app.get('/runMiddleware', (req, res, next) => {
  res.send('RunMiddleware Route');
  console.log(res.locals.middlewareExampleRan);
});

app.listen(PORT);