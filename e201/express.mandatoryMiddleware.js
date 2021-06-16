const
	PORT = process.env.PORT || 3000,
	express = require('express'),
	helmet = require('helmet'),
	app = express();

app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post(
	'/ajax',
	(req, res) => {
		console.log(req.headers, req.body);
		res.send('Test');
});

app.listen(3003);