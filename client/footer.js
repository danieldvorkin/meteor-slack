Template.footer.events({
	'keypress input': function(e) {
		// if the event character code equals 13 which is the enter key
		if (e.charCode == 13) {
			e.stopPropagation();
			$('.message-history').append('<div class="message"><a href="" class="message_profile-pic"></a><a href="" class="message_username">scotch</a><span class="message_timestamp">1:31 AM</span><span class="message_star"></span><span class="message_content">' + $('.input-box_text').val() + '</span></div>');
			$('.input-box_text').val("");
			return false;
		}
	}
})