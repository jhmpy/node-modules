/*

MODULE: process

DESCRIPTION: The process module provides information about the current Node.js process, as well as methods for interacting with it.

*/


console.log(`PID: ${process.pid}`);
console.log(`Node.js version: ${process.version}`);
console.log(`Current working directory: ${process.cwd()}`);

process.on('exit', (code) => {
  console.log(`Process exited with code ${code}`);
});

process.exit(1);
