'use strict';
module.exports = function (val) {
	return (Symbol && 'iterator' in Symbol
		&& val != null && 'function' === typeof val[Symbol.iterator]);
};
