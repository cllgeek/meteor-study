Meteor.publish('allPosts', function() {
	return Posts.find();
});

Meteor.publish('postsByAuthor', function(name) {
	return Posts.find({flagged: false, author: name})
});

Meteor.publish('postById', function(postId) {
	return Posts.find({_id: postId});
});