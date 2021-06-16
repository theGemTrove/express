const
	PORT = process.env.PORT || 3000,
	path 		= require('path'),
	express = require('express'),
	helmet	= require('helmet'),
	app = express();

app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(PORT);