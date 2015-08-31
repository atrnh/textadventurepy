$('input').on({
	keydown: function(e) {
		if (e.which == 13) {
			$('button').click();
			e.preventDefault();
		}
	},
	focus: function() {
		$(this).val('');
		$(this).removeClass('blurred');
	},

	blur: function() {
		if (!($(this).val())) {
			$(this).val('Enter command here, press "Go" or hit return key to submit');
			$(this).addClass('blurred');
		}
	}
});



function getText() {
	var i = $('input').val();
	if (i) {
		$('input').focus();
		return i;
	} else { 
		pushToDisplay('Please try again.'); 
		i.preventDefault();
	}
}

function parseText() {
	pushToDisplay(getText());
}

function pushToDisplay(t) {
	$('#display').prepend('<p>' + t + '</p>');
}


