const
  PORT = process.env.PORT ? parseInt(process.env.PORT) : 7770,
  http = require('http'),
  fs = require('fs');

const server = http.createServer((req, res) => {
  // Manually Routing The Request
  console.log('A request was made to: ', req.url);
  if (req.url === '/') {
    res.writeHead(200, {'content-type': 'text/html'});
    res.write("<h1>Hello World</h1>");
    res.end();//
  } else if (req.url === '/secret') {
    const homePage = fs.readFileSync('index.html');
    res.writeHead(200, {'content-type': 'text/html'});
    res.write(homePage);
    res.end();
  } else if (req.url === '/img/nodejs.png') {
    const image = fs.readFileSync('./img/nodejs.png');
    res.writeHead(200, {'content-type': 'text/png'});
    res.write(image);
    res.end();
  } else if (req.url === '/style/style.css') {
    const style = fs.readFileSync('./style/style.css');
    res.writeHead(200, {'content-type': 'text/css'});
    res.write(style);
    res.end();
  } else {
    res.writeHead(404, {'content-type': 'text/html'});
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});

server.listen(PORT);