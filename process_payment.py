import webapp2
import stripe

class Payment_Processing(webapp2.RequestHandler):
	def post(self):
		stripe.api_key = "sk_test_eHsQUr5Aie80HMkJem3HVP1Z"
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
			self.response.status("204")
			pass
		self.response.status("400")

app = webapp2.WSGIApplication([
	('/process_payment', Payment_Processing),
], debug=True)
