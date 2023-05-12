/*

MODULE: net

DESCRIPTION: The net module provides an implementation of TCP (Transmission Control Protocol) sockets, allowing you to create TCP servers and clients.

*/


const net = require('net');

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`);
    socket.write(`You said: ${data}`);
  });
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});

const client = net.createConnection({ port: 8080 }, () => {
  console.log('Connected to server!');
  client.write('Hello, server!');
});

client.on('data', (data) => {
  console.log(`Received data from server: ${data}`);
  client.end();
});
