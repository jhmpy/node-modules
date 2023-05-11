/*

MODULE: path

DESCRIPTION: The path module provides utilities for working with file and directory paths.

*/


const path = require('path');

// Join path segments
const fullPath = path.join('/Users/username', 'Documents', 'file.txt');
console.log(fullPath);

// Resolve a path
const resolvedPath = path.resolve('file.txt');
console.log(resolvedPath);

// Parse a path
const parsedPath = path.parse('/Users/username/Documents/file.txt');
console.log(parsedPath);
