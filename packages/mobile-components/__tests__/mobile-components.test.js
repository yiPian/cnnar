'use strict';

const mobileComponents = require('..');
const assert = require('assert').strict;

assert.strictEqual(mobileComponents(), 'Hello from mobileComponents');
console.info('mobileComponents tests passed');
