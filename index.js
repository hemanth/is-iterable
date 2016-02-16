'use strict';
module.exports = function (val) {
	return (Symbol && Symbol.iterator
		&& val != null && 'function' === typeof val[Symbol.iterator]);
};
