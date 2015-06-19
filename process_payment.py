import webapp2
import stripe
import secret_keys_that_should_never_be_versioned

class Payment_Processing(webapp2.RequestHandler):
	def post(self):
		stripe.api_key = secret_keys_that_should_never_be_versioned.stripe
		token = self.request.get("stripeToken")
		amount = self.request.get("amount")

		try:
			charge = stripe.Charge.create(
				amount=amount,
				currency="usd",
				card=token,
				description="desc"
			)
		except stripe.CardError, e:
			self.response.set_status(400)
			pass
		self.response.set_status(204)

app = webapp2.WSGIApplication([
	('/process_payment', Payment_Processing),
], debug=True)
