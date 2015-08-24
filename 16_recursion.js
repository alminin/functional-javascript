function getDependencies(tree, result) {
	var result = result || [];
	var deps = tree.dependencies || {};
	if (!tree.dependencies) return [];

	Object.keys(deps).forEach(function(elm) {
		var depStr = elm + "@" + deps[elm].version;

		if (result.indexOf(depStr) < 0) {
			result.push(depStr);
		}

		getDependencies(deps[elm], result);
	});

	return result.sort();
}

module.exports = getDependencies;