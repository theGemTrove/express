const
  PORT = process.env.PORT || 7775,
  helmet = require('helmet'),
  express = require('express'),
  app = express().use(helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        scriptSrc: ["'self'", "ajax.googleapis.com", "'unsafe-inline'"],
      }
    }
  }));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/ajax', (req, res) => {
  console.log(req.body);
  res.send('Test');
});

app.listen(PORT);