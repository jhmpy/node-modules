/*

MODULE: http

DESCRIPTION: The http module provides the HTTP server and client functionality. It is used for creating HTTP servers and making HTTP requests.

*/


const http = require('http');

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n');
});

// Start the server
server.listen(8080, () => {
  console.log('Server listening on port 8080');
});

// Make an HTTP request
const options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
