/*

MODULE: fs

DESCRIPTION: The fs module provides file system related operations such as reading and writing to files, creating and deleting directories, etc.

*/


const fs = require('fs');

// Read a file synchronously
const content = fs.readFileSync('./file.txt', 'utf-8');
console.log(content);

// Write to a file synchronously
fs.writeFileSync('./new_file.txt', 'Hello World!');

// Asynchronously read a file
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Asynchronously write to a file
fs.writeFile('./new_file.txt', 'Hello World!', (err) => {
  if (err) throw err;
  console.log('Data written to file');
});
