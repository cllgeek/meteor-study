Template.header.helpers({
	pageTitle: function() {
		Session.set('pageTitle', 'Hacker News');
		return Session.get('pageTitle');
	}
})