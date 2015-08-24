function loadUsers(userIds, load, done) {
	var users = [];
	var count = 0;

	userIds.forEach(function(elem, index) {
		load(elem, function(data) {
			users[index] = data;
			count++;
			if (count === userIds.length) return done(users);
		});
	});
}

module.exports = loadUsers;