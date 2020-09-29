/**
 * Exercise 3: Create an HTTP web server
 */

var http = require('http');
let fs = require('fs');

//create a server
let server = http.createServer(function (req, res) {

	/*
	 * YOUR CODE GOES IN HERE
	 * Sends a response back to the client
	 */
	
	if (req.url === '/style.css') {
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(fs.readFileSync('style.css', 'utf8'));
    } else if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(fs.readFileSync( 'index.html', 'utf8'));
    } else if (req.url === '/index.js') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(fs.readFileSync( 'index.js', 'utf8'));
    } else {
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.write('Error: Not Found');
	}
    res.end();
});
// The server starts to listen on port 3000

server.listen(3000); 