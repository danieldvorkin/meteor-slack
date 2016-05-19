Meteor.startup(function(){
	
	// Define a factory called 'message' which will belong to the collection Messages
	Factory.define('message', Messages, {
		// call a function to assign the Fake.sentence to the value of text
		text: function(){
			return Fake.sentence();
		}
	});

	// Remove all docs in the Messages collection
	Messages.remove({});

	if (Messages.find({}).count() === 0){
		// call the times function and Factory create a message
		_(10).times(function(n){
			// Call the factory message
			Factory.create('message');
		});
	}
});