/*

MODULE: zlib

DESCRIPTION: The zlib module provides compression and decompression functionality for files and data.

*/


const zlib = require('zlib');
const fs = require('fs');

// Compress a file
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('file.txt');
const writeStream = fs.createWriteStream('file.txt.gz');
readStream.pipe(gzip).pipe(writeStream);

// Decompress a file
const gunzip = zlib.createGunzip();
const readStream2 = fs.createReadStream('file.txt.gz');
const writeStream2 = fs.createWriteStream('file.txt');
readStream2.pipe(gunzip).pipe(writeStream2);
