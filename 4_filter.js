function getShortMessages(messages) {
	return messages.filter(function(elem) {
		if (elem.message && elem.message.length < 50)
			return elem.message;
	}).map(function(elem) {
		return elem.message;
	});
}

module.exports = getShortMessages;