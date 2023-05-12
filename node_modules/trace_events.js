/*

MODULE: trace_events

DESCRIPTION: The trace_events module provides a way to trace events emitted by Node.js and other libraries.

*/


const { createServer } = require('http');
const { createTracing } = require('trace_events');

const trace = createTracing('http');

const server = createServer((req, res) => {
  res.end('Hello, world!');
});

trace('request:start', server);

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
