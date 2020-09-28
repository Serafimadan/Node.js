/**
 * Exercise 3: Create an HTTP web server
 */

var http = require('http');

//create a server
let server = http.createServer(function (req, res) {

	/*
	 * YOUR CODE GOES IN HERE
	 * Sends a response back to the client
	 */
	res.write('Hello!'); 
	// Ends the response
	res.end(); 
});
// The server starts to listen on port 3000

server.listen(3000); 