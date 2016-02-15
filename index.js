'use strict';
module.exports = function (val) {
	return val != null && 'function' === typeof val[Symbol.iterator];
};
