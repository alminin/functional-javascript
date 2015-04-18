function reduce(arr, fn, initial) {
	return (function reduceOne(ind, result) {
		if (ind > arr.length - 1) return result // end condition
			return reduceOne(ind + 1, fn(result, arr[ind], ind, arr))
	})(0, initial) // Immediately-invoked function expression
}
module.exports = reduce