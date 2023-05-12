/*

MODULE: repl

DESCRIPTION: The repl module provides a REPL (Read-Eval-Print Loop) environment for running Node.js code interactively.

*/


const repl = require('repl');

repl.start({
  prompt: '> ',
  eval: (cmd, context, filename, callback) => {
    const result = eval(cmd);
    callback(null, result);
  }
});
