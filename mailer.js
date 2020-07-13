const nodemailer = require('nodemailer')

const clientId = '587242485114-i9nmmosit19tlngmbk6qfbtbsa26bcso.apps.googleusercontent.com'
const clientSecret = 'v_TlLrpq1ax68H-_4rtNxkJO'
const refreshToken = '1//041RAjPRKIie4CgYIARAAGAQSNgF-L9Ir6gpx933jdJOiG7X4sghIDpAne7pYXDHM88YJCoQhOIUgx-nDdwM0gUOvjdT03higqQ'
const accessToken = 'ya29.a0AfH6SMBz008Mqmq77GW0O5DAT8LfMFzKeOTP5wXoTOpSiBgvTetOG3oTSpj9QXeQVVwgJHlkeO_D-W4DdAXEAZkCGBTc7lDGfCjnx7_J8RW_xLYAv2cu9PgQ5aWbNed0LA8jOxPD5egRhMLQ8_FH9a3Fh3LBIkS7wpE'
const user = 'yasunakathiago@gmail.com'


const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: { type: 'OAuth2', user, clientId, clientSecret, refreshToken, accessToken }
})


const send = ({ email, name, message }) => {
  const emailMessage = {
    from: email,
    to: 'yasunakathiago@gmail.com',
    text: message,
    replyTo: email
  }
  return new Promise((res, rej) => {
    transporter.sendMail(emailMessage, (err, info) => {
      err ? rej(err) : res(info)
    }
    )
  })
}

module.exports = send