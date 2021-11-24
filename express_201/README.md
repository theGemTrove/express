# ExpressJS 201 - Project Setup
## Purpose
- Demonstrates the use of middleware, different types of 3rd party middleware, responding with json,
API vs. Server-Side Rendering, setting up different types of view engines, and rendering
server-side views. Views explored: EJS, HBS, PUG/JADE - I personally default to using EJS if I use ss-rendering.

Files in this folder demonstrate an ExpressJS web-server implementation.
ExpressJS is a package that sits atop of NodeJS. NodeJS can accomplish the same tasks as express,
however, express makes the job of managing routes and middleware far simpler.

Demos
1. startAppUseExample
2. startOtherUsesExample
3. startRenderingExample

Steps To Demo
- `git clone https://github.com/troveofgems/express.git`
- `cd express_201`
- `mv ./env.txt ./.env` - Then manually configure any variables as needed
- `node desiredCommand`
- `Open URL http://localhost:PORT`