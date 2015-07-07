'use strict';
module.exports = function (val) {
	return (val !== null && typeof val === 'object'
		&& typeof val[Symbol.iterator] === 'function');
};
