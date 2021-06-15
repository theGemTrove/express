const
	PORT = process.env.NODE_ENV || 3001,
	debug = require('debug')(__filename),
	express = require('express'),
	app = express();

// The app object comes bundled with a few methods:
// Known as HTTP/REST Verbs
// The basic app CRUD functionality offered is:
// 1.  get (READ) - this is the default for all browsers.
// 2.  post (CREATE)
// 3.  delete (DELETE)
// 4.  put (UPDATE)
// 5. Express Specific Method: all(path, callback) - accepts any route request
/**************************************************************************************************************/
app.all('*', (req, res) => {
	res.send('<h1>Routed By all()</h1>');
});
app.get('*', (req, res) => {
	res.send('<h1>Routed By get()</h1>');
});
app.post('/', (req, res) => {
	res.send('<h1>Routed By post()</h1>');
});
app.delete('/', (req, res) => {
	res.send('<h1>Routed By delete()</h1>');
});
app.update('/', (req, res) => {
	res.send('<h1>Routed By update()</h1>');
});
/*****************************************************************************************************************/
app.listen(PORT, () => {
	debug(`Listening on port: ${PORT}`);
});