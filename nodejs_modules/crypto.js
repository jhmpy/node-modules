/*

MODULE: crypto

DESCRIPTION: The crypto module provides cryptographic functionality that can be used to create hashes, sign and verify data, and encrypt and decrypt data.

*/


const crypto = require('crypto');

// Create a hash
const hash = crypto.createHash('sha256');
hash.update('Hello World!');
console.log(hash.digest('hex'));

// Create a HMAC
const hmac = crypto.createHmac('sha256', 'secret-key');
hmac.update('Hello World!');
console.log(hmac.digest('hex'));

// Create a cipher
const cipher = crypto.createCipher('aes192', 'secret-key');
let encrypted = cipher.update('Hello World!', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

// Create a decipher
const decipher = crypto.createDecipher('aes192', 'secret-key');
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
