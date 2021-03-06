Posts = new Mongo.Collection('posts');

Posts.allow({
	// insert: function(userId, doc) {
	// 	return !! userId;
	// }
  update: function(userId, post) { return ownsDoc(userId, post); },
  remove: function(userId, post) { return ownsDoc(userId, post); }
});

Posts.deny({
  update: function(userId, post, fieldNames) {
    // 只能更改如下两个字段：
    return (_.without(fieldNames, 'url', 'title').length > 0);
  }
});

Meteor.methods({
  postInsert: function(postAttributes) {
    check(Meteor.userId(), String);
    check(postAttributes, {
      title: String,
      url: String
    });

    // 延时补偿
    // if (Meteor.isServer) {
    //   postAttributes.title += "{server}";
    //   Meteor._sleepForMs(5000);
    // } else {
    //   postAttributes.title += "{client}";
    // }

    var postWithSameLink = Posts.findOne({url: postAttributes.url});
    if (postWithSameLink) {
    	return {
    		postExists: true,
    		_id: postWithSameLink._id
    	}
    };

    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    var postId = Posts.insert(post);

    return {
      _id: postId
    };
  }
});