Template.messages.helpers ({
	messages: Messages.find({})
});
Template.registerHelper("usernameFromId", function (userId){
	var user = Meteor.users.findOne({_id: userId});
	if (typeof user === "undefined") {
		return "Anonymous";
	}
	return user.username;
});

Template.registerHelper("timestampToTime", function(timestamp){
	var date = new Date(timestamp);
	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();
	var seconds = "0" + date.getSeconds();
	console.log(hours + ":" + minutes.substr(minutes.length - 2));
	return hours + ":" + minutes.substr(minutes.length - 2);
});

Meteor.subscribe("messages");