'use strict';
var assert = require('assert');
var isIterable = require('./');

it('should detected non-iterable values', function () {
	assert.strictEqual(isIterable({}), false);
	assert.strictEqual(isIterable(new Object()), false);

	assert.strictEqual(isIterable(true), false);
	assert.strictEqual(isIterable(new Boolean(true)), false);

	assert.strictEqual(isIterable(1), false);
	assert.strictEqual(isIterable(new Number(1)), false);
	assert.strictEqual(isIterable(Infinity), false);

	assert.strictEqual(isIterable(function(){}), false);
	assert.strictEqual(isIterable(new Function('')), false);

	assert.strictEqual(isIterable(new RegExp('/./i')), false);
	assert.strictEqual(isIterable(/./i), false);

	assert.strictEqual(isIterable(undefined), false);
	assert.strictEqual(isIterable(null), false);
	assert.strictEqual(isIterable(NaN), false);

	assert.strictEqual(isIterable(new WeakSet()), false);
	assert.strictEqual(isIterable(new WeakMap()), false);
});

it('should detect iterable values', function() {
	assert.strictEqual(isIterable(new String('foo')), true);

	assert.strictEqual(isIterable([1,2,3]), true);
	assert.strictEqual(isIterable([1,2,3][Symbol.iterator]()), true);
	assert.strictEqual(isIterable(new Array([1,2,3])), true);

	assert.strictEqual(isIterable(new Map()), true);
	assert.strictEqual(isIterable(new Set()), true);
});
