/*
This code uses callbacks to handle asynchronous function responses.
It currently demonstrates using an async-await pattern.
AWS supports both the async-await and promises patterns.
For more information, see the following:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/calling-services-asynchronously.html
https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
*/

'use strict'
const nodemailer = require('nodemailer')

// If you're using Amazon SES in a region other than US West (Oregon),
// replace email-smtp.us-west-2.amazonaws.com with the Amazon SES SMTP
// endpoint in the appropriate AWS Region.
const smtpEndpoint = 'email-smtp.sa-east-1.amazonaws.com'

// The port to use when connecting to the SMTP server.
const port = 587

// Replace sender@example.com with your "From" address.
// This address must be verified with Amazon SES.
const senderAddress = 'Thiago Yasunaka <thiagoyasunaka@hotmail.com>'

// Replace recipient@example.com with a "To" address. If your account
// is still in the sandbox, this address must be verified. To specify
// multiple addresses, separate each address with a comma.
var toAddresses = 'yasunakathiago@gmail.com'

// Replace smtp_username with your Amazon SES SMTP user name.
const smtpUsername = 'AKIAYXILS7BKNL7BYYNZ'

// Replace smtp_password with your Amazon SES SMTP password.
const smtpPassword = 'BDULWQxdeRvDqs2wUEWTOdhKugTfwDGVuCqJmHd56sgZ'

// The subject line of the email
var subject = 'Amazon SES test (Nodemailer)'

// The email body for recipients with non-HTML email clients.
var body_text = `Amazon SES Test (Nodemailer)
---------------------------------
This email was sent through the Amazon SES SMTP interface using Nodemailer.
`

// The body of the email for recipients whose email clients support HTML content.
var body_html = `<html>
<head></head>
<body>
  <h1>Amazon SES Test (Nodemailer)</h1>
  <p>This email was sent with <a href='https://aws.amazon.com/ses/'>Amazon SES</a>
        using <a href='https://nodemailer.com'>Nodemailer</a> for Node.js.</p>
</body>
</html>`

async function sendEmail() {
  // Create the SMTP transport.
  let transporter = nodemailer.createTransport({
    host: smtpEndpoint,
    port: port,
    secure: false, // true for 465, false for other ports
    auth: {
      user: smtpUsername,
      pass: smtpPassword,
    },
  })

  // Specify the fields in the email.
  let mailOptions = {
    from: senderAddress,
    to: toAddresses,
    subject: subject,
    text: body_text,
    html: body_html,
  }

  return await transporter.sendMail(mailOptions)
}

const contact = async (req, res) => {
  const { email, name, message } = req.body
  try {
    const response = await sendEmail({ email, name, message })
    res.send(response)
  } catch (error) {
    res.send(error)
  }
}

export default contact
