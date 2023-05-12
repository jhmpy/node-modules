/*

MODULE: v8

DESCRIPTION: The v8 module provides access to the V8 JavaScript engine's internal APIs.

*/


const v8 = require('v8');

console.log(`Heap statistics: ${v8.getHeapStatistics()}`);
console.log(`Heap space statistics: ${v8.getHeapSpaceStatistics()}`);
