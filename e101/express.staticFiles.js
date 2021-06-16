const
	PORT = process.env.NODE_ENV || 3002,
	fs = require('fs'),
	path = require('path'),
	express = require('express'),
	app = express();
/**********************************************************************************************************/
app.use(express.static('public'));
/**********************************************************************************************************/
app.listen(PORT);
