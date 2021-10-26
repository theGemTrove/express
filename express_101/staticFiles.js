const
  PORT = process.env.PORT || 7773,
  express = require('express'),
  app = express();

app.use(express.static('public'));

app.listen(PORT);