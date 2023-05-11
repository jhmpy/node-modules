/*

MODULE: url

DESCRIPTION: The url module provides utilities for working with URLs.

*/


const url = require('url');

// Parse a URL
const parsed = url.parse('https://www.example.com/path?query=value#hash');
console.log(parsed);

// Format a URL
const formatted = url.format({
  protocol: 'https:',
  host: 'www.example.com',
  pathname: '/path',
  search: '?query=value',
  hash: '#hash'
});
console.log(formatted);
