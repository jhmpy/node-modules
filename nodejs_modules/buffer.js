/*

MODULE: buffer

DESCRIPTION:  Provides a way of handling binary data in Node.js.

*/


const buf1 = Buffer.alloc(5);
const buf2 = Buffer.from('hello');

console.log(buf1); // <Buffer 00 00 00 00 00>
console.log(buf2); // <Buffer 68 65 6c 6c 6f>