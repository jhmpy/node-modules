/*

MODULE: domain

DESCRIPTION: The domain module provides a way to handle uncaught exceptions in a more organized way.
             Deprecated in Node.js v14.

*/


const domain = require('domain');

const d = domain.create();

d.on('error', (err) => {
  console.error(`Caught error: ${err}`);
});

d.run(() => {
  setTimeout(() => {
    throw new Error('Test error');
  }, 1000);
});
