/*

MODULE: assert

DESCRIPTION: Provides a simple set of assertion tests that can be used to test invariants.

*/


const assert = require('assert');

assert.equal(2 + 2, 4); // will not throw an error
assert.equal(2 + 2, 5); // will throw an AssertionError