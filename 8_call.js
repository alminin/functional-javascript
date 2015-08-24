/*
function duckCount() {
	var result = 0;
	for (var i = 0, j = arguments.length; i < j; i++) {
		if (Object.prototype.hasOwnProperty.call(arguments[i], 'quack')) {
			result++;
		}
	}
return result;
}
*/

function duckCount() {
	return Array.prototype.slice.call(arguments).filter(function(obj) {
		return Object.prototype.hasOwnProperty.call(obj, 'quack')
	}).length;
}

module.exports = duckCount;