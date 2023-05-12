/*

MODULE: tty

DESCRIPTION: The tty module provides utilities for working with terminal devices.

*/


const tty = require('tty');

if (tty.isatty(process.stdin)) {
  console.log('stdin is a TTY device');
}

if (tty.isatty(process.stdout)) {
  console.log('stdout is a TTY device');
}
