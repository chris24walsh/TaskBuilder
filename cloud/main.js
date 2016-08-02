var Mailgun = require('mailgun');
Mailgun.initialize('sandbox1287a4b2510d4161ba9eb2b8dc0bda53.mailgun.org', 'key-0a5b959ae314679ee1983ab8afccdc05');
	
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("sendMail", function(request, response) {
	Mailgun.sendEmail({
		to: request.params.email,
		from: "postmaster@sandbox1287a4b2510d4161ba9eb2b8dc0bda53.mailgun.org",
		subject: "Update from Pathmaker",
		text: request.params.message
	}, {
		success: function(httpResponse) {
			console.log(httpResponse);
			response.success("Email sent!");
		},
		error: function(httpResponse) {
			console.error(httpResponse);
			response.error("Uh oh, something went wrong");
		}
	});
	response.success("Hello there!");
});