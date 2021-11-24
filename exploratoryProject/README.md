# ExpressJS Exploratory Project - Project Setup
## Purpose
- Demonstrates the culmination of ExpressJS 101 - ExpressJS 301 functioning as a server-side API provider
that utilizes the [MovieDB API](https://developers.themoviedb.org/3/getting-started/introduction).
The application provides various routes commonly found in an API setup. And the Server-side rendered view
offers the ability to interact with the MovieDB utilizing views which allow one to search for either movies or
actors, or see a list of the currently popular movies available in theaters to date.

Files in this folder demonstrate a full ExpressJS application.
ExpressJS is a package that sits atop of NodeJS. NodeJS can accomplish the same tasks as express,
however, express makes the job of managing routes and middleware far simpler.

Steps To Demo
- `git clone https://github.com/troveofgems/express.git`
- `cd exploratoryProject`
- `mv ./env.txt ./.env` - Then manually configure any variables as needed
- `node start`
- `Open URL http://localhost:PORT`