'use strict';
module.exports = function (val) {
	return (typeof Symbol !== 'undefined' && Symbol && 'iterator' in Symbol
		&& val != null && typeof val[Symbol.iterator] === 'function');
};
