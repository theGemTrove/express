const
	LOGIN_ATTEMPT_LIMIT = process.env.LOGIN_LIMIT || 3;
	PORT = process.env.PORT || 3000,
	path = require('path'),
	cookieParser = require('cookie-parser'),
	express = require('express'),
	helmet = require('helmet'),
	app = express();

app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
	if (req.query.status === 'failure') {
		if (LOGIN_ATTEMPT_LIMIT - req.cookies.attempt <= 1 || res.locals.accountLocked) {
			res.locals.msg = 'This Account Has Been Locked For Security';
			res.locals.accountLocked = true;
			return next();
		}
		let incrementAttempt = ++req.cookies.attempt || 1;
		res.locals.attemptLimit = LOGIN_ATTEMPT_LIMIT;
		res.cookie('attempt', incrementAttempt);
		res.locals.attempt = incrementAttempt;
		let count = LOGIN_ATTEMPT_LIMIT - incrementAttempt;
		res.locals.msg = `Sorry, the provided information is not valid. You have ${count} ${LOGIN_ATTEMPT_LIMIT - incrementAttempt === 1 ? 'try' : 'tries'} left.`;
	} else {
		res.locals.attemptLimit = 3;
		res.locals.attempt = 0;
		res.locals.msg = '';
	}
	next();
});

app.get('/', (req, res, next) => {
	res.redirect('/login');
});

app.get('/login', (req, res) => {
	// The req object has a query property in express
	// req.query is an object with a property of every key in the query string
	// The query string is where insecure data should be placed.
	res.render('login');
});

app.get('/welcome', (req, res) => {
	let { username } = req.cookies;
	res.render('welcome', {
		username
	});
});

app.get('/logout', (req, res) => {
	res.clearCookie('username');
	res.redirect('/login');
});

app.post('/process_login', (req, res) => {
	const
		psswd = req.body.password,
		uname = req.body.username;

	if (psswd === 'x') {
		res.cookie('username', uname);
		return res.redirect('/welcome');
	}

	return res.redirect('/login?status=failure');
});

app.listen(PORT);