/*

MODULE: module

DESCRIPTION: The module module provides a way to load and use external modules in your Node.js application.

*/


// greeting.js
module.exports = function(name) {
    return `Hello, ${name}!`;
  }
  
  // app.js
  const greeting = require('./greeting');
  
  console.log(greeting('world'));
  