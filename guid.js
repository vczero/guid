/**
 * guid: we can use to create token or id...
 * Inspired from the book of JavaScript Patterns, Stoyan Stefanov
 * You can add some special value in this guid, such as user's email or nickname or id.
 * For example, I added a ObjectId(mongoDB) to this guid in my project.
 * @module guid
 */
module.exports = {
	create: function() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0,
				v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		}).toUpperCase();
	}
};