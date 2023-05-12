/*

MODULE: http2

DESCRIPTION: The http2 module provides an implementation of the HTTP/2 protocol, allowing you to create HTTP/2 servers and clients.

*/


const http2 = require('http2');
const fs = require('fs');

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};

const server = http2.createSecureServer(options, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
});

server.listen(8443, () => {
  console.log('Server listening on https://localhost:8443/');
});
