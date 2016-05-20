Meteor.publish('messages', function(){
	// Returns all the messages
	return Messages.find();
})