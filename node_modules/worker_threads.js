/*

MODULE: worker_threads

DESCRIPTION: The worker_threads module provides a way to run JavaScript code in parallel, using worker threads

*/


const { Worker } = require('worker_threads');

const worker = new Worker(`
  const { parentPort } = require('worker_threads');

  parentPort.postMessage('Hello, parent!');

  parentPort.on('message', (msg) => {
    console.log(\`Received message from parent: \${msg}\`);
  });
`, { eval:true });

worker.on('message', (msg) => {
  console.log(`Received message from worker: ${msg}`);
});

worker.postMessage('Hello, worker!');
