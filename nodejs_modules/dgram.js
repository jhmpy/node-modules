/*

MODULE: dgram

DESCRIPTION: The dgram module provides an implementation of UDP (User Datagram Protocol) datagram sockets.

*/


const dgram = require('dgram');

const client = dgram.createSocket('udp4');
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  console.log(`Server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  server.send('Thanks for your message!', rinfo.port, rinfo.address);
});

server.bind(1234);

client.send('Hello, server!', 1234, 'localhost', (err) => {
  if (err) {
    console.error(err);
    client.close();
  }
});

client.on('message', (msg, rinfo) => {
  console.log(`Client got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  client.close();
});
