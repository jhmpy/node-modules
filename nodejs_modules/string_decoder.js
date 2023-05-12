/*

MODULE: string_decoder

DESCRIPTION: The string_decoder module provides a way to decode a buffer into a string, handling multi-byte characters correctly.

*/


const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

const buf1 = Buffer.from('hello');
console.log(decoder.write(buf1)); // hello

const buf2 = Buffer.from([0xC2, 0xA9]);
console.log(decoder.write(buf2)); // ©
