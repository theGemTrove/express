const
	express = require('express'),
	app = express();

// Express is really just 2 concepts:
// 1. Routing With The Express Router
// 2. Running Middleware That Comprises of a Web-framework

//We hijack the req to res process and run middleware between the networking calls
// Req --- Middleware ---> Res
// The easiest way to think about middleware is that it's a function that has access to the req, res, and next objects.

// Why Use Middleware?
// 1. Request is received
// 2. User may need to be validated
// 3. The need to store data in a DB
// 4. Validation of the data provided by the user; parsing
// 5. Response is sent

// Interesting Fact
// app.get() == app.use()

