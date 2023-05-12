/*

MODULE: https

DESCRIPTION: The https module provides an implementation of the HTTPS (HTTP Secure) protocol, allowing you to create HTTPS servers and clients.

*/


const https = require('https');

const options = {
  key: 'PRIVATE KEY',
  cert: 'CERTIFICATE',
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello, world!');
});

server.listen(443, () => {
  console.log('Server listening on port 443');
});
