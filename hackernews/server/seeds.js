if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Discover Meteor',
		url: 'http://wiki.jikexueyuan.com/project/discover-meteor/',
		author: 'Jason',
		flagged: false
	});
	Posts.insert({
		title: 'Meteor Tutorial',
		url: 'https://www.meteor.com/tutorials/blaze/creating-an-app',
		author: 'Bond',
		flagged: false
	});
	Posts.insert({
		title: 'Baidu',
		url: 'http://www.baidu.com',
		flagged: false,
		author: 'Lee',
		category: 'Java'
	});
}