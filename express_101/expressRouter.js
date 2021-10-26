const
  PORT = process.env.PORT || 7772,
  express = require('express'),
  app = express();

//app.get
//app.post
//app.delete
//app.put

app.get('/', (req, res) => {
  res.send('<h1>This is a GET request</h1>')
});
app.post('/', (req, res) => {
  res.send('<h1>This is a POST request</h1>')
});
app.put('/', (req, res) => {
  res.send('<h1>This is a PUT request</h1>')
});
app.delete('/', (req, res) => {
  res.send('<h1>This is a DELETE request</h1>')
});

app.listen(PORT);