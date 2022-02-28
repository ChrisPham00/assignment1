const http = require('http');
const app = require('./app');

//Sets our port to 3000
const port = 3000;

//Creates a server and listens to server at port 3000
const server = http.createServer(app);
server.listen(port);