# ExpressJS 301 - Project Setup
## Purpose
- Demonstrates the use of managing data from the request object such as forms and cookies, extracting
data from the query string, parsing params and the use of URL wildcards, sending files and managing common 
errors such as 'headers already sent' or setting custom headers. Efficiently managing ExpressJS routes and 
the router object.

Files in this folder demonstrate an ExpressJS web-server implementation.
ExpressJS is a package that sits atop of NodeJS. NodeJS can accomplish the same tasks as express,
however, express makes the job of managing routes and middleware far simpler.

Steps To Demo
- `git clone https://github.com/troveofgems/express.git`
- `cd express_301`
- `mv ./env.txt ./.env` - Then manually configure any variables as needed
- `node startServer`
- `Open URL http://localhost:PORT`