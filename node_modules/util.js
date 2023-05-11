/*

MODULE: util

DESCRIPTION: The util module provides various utility functions that can be used to debug and inspect code.

*/


const util = require('util');

// Print an object with util.inspect
const obj = { name: 'John', age: 30 };
console.log(util.inspect(obj));

// Use util.debuglog to log debug messages
const debug = util.debuglog('myapp');
debug('This is a debug message');
