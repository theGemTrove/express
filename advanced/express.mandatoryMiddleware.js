const
	express = require('express'),
	app = express();

app.use(express.static('public'));
app.use(express.json());


app.post(
	'/ajax',
	(req, res) => {
		console.log(req);
		res.send('Test');
});

app.listen(3003);