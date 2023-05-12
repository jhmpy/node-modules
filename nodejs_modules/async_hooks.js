/*

MODULE: async_hooks

DESCRIPTION: Provides an API to track the lifetime of asynchronous resources created inside a Node.js application.

*/


const async_hooks = require('async_hooks');

const asyncHook = async_hooks.createHook({
  init(asyncId, type, triggerAsyncId, resource) {
    console.log(`init: asyncId: ${asyncId}, type: ${type}`);
  },
  destroy(asyncId) {
    console.log(`destroy: asyncId: ${asyncId}`);
  }
});

asyncHook.enable();

setTimeout(() => {
  console.log('setTimeout executed');
}, 1000);
