const
	PORT = process.env.NODE_ENV || 3000,
	debug	= require('debug')('express.server.js'),
	express = require('express'), // 3rd Party Package
	app = express();

app.all('*', (req, res) => {
	res.send(`<h1>Welcome To The ExpressJS Trove</h1>`);
});

app.listen(PORT, () => {
	debug(`App created and listening on port: ${PORT}`);
});