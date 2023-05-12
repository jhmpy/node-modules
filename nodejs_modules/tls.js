/*

MODULE: tls

DESCRIPTION: The tls module provides an implementation of the TLS (Transport Layer Security) protocol, allowing you to create secure TCP servers and clients.

*/


const tls = require('tls');
const fs = require('fs');

const options = {
  key: fs.readFileSync('/path/to/my/server.key'),
  cert: fs.readFileSync('/path/to/my/server.crt'),
  ca: [fs.readFileSync('/path/to/my/ca.crt')],
  requestCert: true,
  rejectUnauthorized: true
};

const server = tls.createServer(options, (socket) => {
  console.log(`Client connected: ${socket.remoteAddress}:${socket.remotePort}`);
  socket.write('Hello, client!');
  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`);
  });
});

server.listen(8443, () => {
  console.log('Server listening on port 8443');
});

const client = tls.connect(8443, { rejectUnauthorized: true }, () => {
  console.log('Connected to server!');
  client.write('Hello, server!');
});

client.on('data', (data) => {
  console.log(`Received data from server: ${data}`);
  client.end();
});
