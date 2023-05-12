/*

MODULE: events

DESCRIPTION: The events module provides an event emitter that can be used to handle events in Node.js.

*/


const EventEmitter = require('events');

// Create a custom event emitter
class MyEmitter extends EventEmitter {}

// Initialize the event emitter
const myEmitter = new MyEmitter();

// Listen for an event
myEmitter.on('hello', () => {
  console.log('Hello World!');
});

// Emit the event
myEmitter.emit('hello');
