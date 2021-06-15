const
	http = require('http'), // Native NodeJS Package
	fs	 = require('fs');		// Native NodeJS Package

// The http module has the method createServer() which accepts 1 Argument
// The argument is a Callback which has two args: req, res
const server = http.createServer((req, res) => {
	console.log(`Request made to: ${req.url}`); // Output => To Terminal
	if (req.url === '/') {
		// The res object is how the function responds back to the requester
		// It starts with the http message:
		// 1. HEAD - Check - Start-line
		// 2. header
		// 3. body
		// To build the HEAD, refer to writeHead(statusCode, mime-typed-object);
		res.writeHead(200, {'content-type': 'text/html'});
		//res.write('<h2>Welcome To The Home Page</h2>');
		const homePageHTML = fs.readFileSync('./assets/node/node.html');
		console.log(homePageHTML);
		res.write(homePageHTML);
		res.end();
	}  else if (req.url === '/stormySeas.gif') {
		res.writeHead(200, {'content-type': 'image/gif'});
		const imageHTML = fs.readFileSync('./assets/node/stormySeas.gif');
		console.log(imageHTML);
		res.write(imageHTML);
		res.end();
	}  else if (req.url === '/styles.css') {
		res.writeHead(200, {'content-type': 'text/css'});
		const css = fs.readFileSync('./assets/node/styles.css');
		console.log(css);
		res.write(css);
		res.end();
	} else {
		res.writeHead(404, {'content-type': 'text/html'});
		res.write('<h1>Woah, Where Ya Goin There Buddy?</h1>')
		res.write('<h2>Hey Pal, I ain\'t your buddy.</h2>');
		res.write('<h3>Hey Buddy, I ain\'t your pal.</h3>');
		res.end();
	}
});

// The Method createServer() returns an object
// with the method listen(PORT)
server.listen(3000);