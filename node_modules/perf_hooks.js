/*

MODULE: perf_hooks

DESCRIPTION: The perf_hooks module provides an API for measuring the performance of Node.js applications.

*/


const { PerformanceObserver, performance } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
});

obs.observe({ entryTypes: ['measure'] });

performance.mark('start');
// some long running operation here
performance.mark('end');
performance.measure('My operation', 'start', 'end');
