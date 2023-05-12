/*

MODULE: querystring

DESCRIPTION: The querystring module provides utilities for working with query strings in URLs.

*/


const querystring = require('querystring');

// Parse a query string
const parsed = querystring.parse('name=John&age=30');
console.log(parsed);

// Convert an object to a query string
const obj = { name: 'John', age: 30 };
const stringified = querystring.stringify(obj);
console.log(stringified);
