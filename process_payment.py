import webapp2
import stripe

class Payment_Processing(webapp2.RequestHandler):
	def post(self):
		self.response.headers['Content-Type'] = 'text/plain'
		self.response.write('Hello, World!')
		#token = self.request.get("name")

app = webapp2.WSGIApplication([
	('/process_payment', Payment_Processing),
], debug=True)
