/*

MODULE: inspector

DESCRIPTION: The inspector module provides a way to debug Node.js applications using the Chrome DevTools protocol.

*/


const inspector = require('inspector');

inspector.open(9229, 'localhost', true);

function fibonacci(n) {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(40);