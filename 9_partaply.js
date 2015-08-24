var slice = Array.prototype.slice;

function logger(namespace) {
	// Convert arguments object to an array.
	var args = slice.call(arguments);
	return function() {
		console.log.apply(this, args.concat(slice.call(arguments)));
	}
}
module.exports = logger;