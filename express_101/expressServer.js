const
  PORT = process.env.PORT || 7771,
  express = require('express'),
  app = express();

app.all('*', (req, res) => {
  // Express handles the basic headers like statusCode & mime-type, and closing the connections
  res.send('<h1>Hello World!</h1>');
});

app.listen(PORT);