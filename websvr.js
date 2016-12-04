/**
 * Created by TheSuperHomie on 12/3/16.
 */

/*
 Problem #3: Submit file websvr.js
 Using Node.js http module, write a Node.js script that starts a simple HTTP Server. The HTTP server should run on port 8001, and writes back to client:

 1. response.writeHead(200, {'Content-Type': 'text/html'});

 2. response.write('Hello World, my name is John Smith'); //Fill in your name
 */

var http = require("http");

http.createServer(function (request, response) {

    // Send the HTTP header
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // write content to page
    response.write('Hello World, my name is Claudio Herrera');

    // finish the response
    response.end();
}).listen(8001);

// Debug
console.log('Server running at http://127.0.0.1:8001/');