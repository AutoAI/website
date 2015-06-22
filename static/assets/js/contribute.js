
Stripe.setPublishableKey('pk_test_WlBCggCT9kHOZZ1kordWvyTD');
jQuery(function($) {
	$('#payment-form').submit(function(event) {
		var $form = $(this);

		// Disable the submit button to prevent repeated clicks
		$form.find('button').prop('disabled', true);
		showModal();
		Stripe.card.createToken($form, stripeResponseHandler);

		// Prevent the form from submitting with the default action
		return false;
	});
});
function stripeResponseHandler(status, response) {
	var $form = $('#payment-form');

	if (response.error) {
		// Show the errors on the form
		$form.find('.payment-errors').text(response.error.message);
		$form.find('button').prop('disabled', false);
	} else {
		// response contains id and card, which contains additional card details
		var token = response.id;
		// Insert the token into the form so it gets submitted to the server
		$form.append($('<input type="hidden" name="stripeToken" />').val(token));
		// and submit

		$form.get(0).submit();
	}
};
function showModal() {
	$("#processingModal").foundation("reveal", "open");
}
function dismissModal() {
	$("#processingModal").foundation("reveal", "close");
}

function processPayment(token, amount) {
	var x = new XMLHttpRequest();
	x.open("POST", "/process_payment.py?stripeToken=" + token + "&amount=" + (amount*100));
	x.onreadystatechange = function() {
		console.log(x.status);
		if (x.readyState == 4 && x.status == 204) {
			dismissModal();
		} else {
			
		}
	};
	x.send();
}

function showThankYou() {
	$("#modalHeading").html("Thank you");
}
