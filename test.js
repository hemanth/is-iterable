'use strict';
var assert = require('assert');
var isIterable = require('./');

it('should detected non iterable values', function () {
	assert.strictEqual(!isIterable({}), true);
});

it('should detect iterable values', function() {
	var arr = [1,2,3];
	assert.strictEqual(isIterable(arr[Symbol.iterator]()),true);
});
