/*

MODULE: vm

DESCRIPTION: The vm module provides a way to run JavaScript code in a sandboxed environment.

*/


const vm = require('vm');

const context = {
  console: {
    log: (msg) => {
      console.log(`Logged: ${msg}`);
    }
  }
};

const script = new vm.Script(`
  const msg = 'Hello, world!';
  console.log(msg);
`);

script.runInNewContext(context);
