/*

MODULE: dns

DESCRIPTION: The dns module provides functions to perform DNS (Domain Name System) lookups and reverse DNS lookups.

*/


const dns = require('dns');

dns.lookup('google.com', (err, address) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Google IP address: ${address}`);
});

dns.reverse('8.8.8.8', (err, hostnames) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Reverse lookup of 8.8.8.8: ${JSON.stringify(hostnames)}`);
});