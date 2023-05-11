/*

MODULE: os

DESCRIPTION: The os module provides operating system-related utility methods and properties, such as getting the operating system type, platform, and hostname.

*/


const os = require('os');

// Get the operating system platform
console.log(os.platform());

// Get the CPU architecture
console.log(os.arch());

// Get the total memory available
console.log(os.totalmem());
