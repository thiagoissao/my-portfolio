const nodemailer = require('nodemailer')

const clientId = '587242485114-i9nmmosit19tlngmbk6qfbtbsa26bcso.apps.googleusercontent.com'
const clientSecret = 'v_TlLrpq1ax68H-_4rtNxkJO'
const refreshToken = '1//049I8d4JlBzuyCgYIARAAGAQSNgF-L9IrVO6XzH3jEDejAA7iESBOzRkKx3CEkUX3ZaQSMB1LulYvcPY0goI3HvrTWzKz2E7dbA'
const accessToken = 'ya29.a0AfH6SMDDA2XiSxuGG0_gfZlKnmx5Z4C5m0uGQibhqWttNPro-cn1Ch0LusYMOMsdzSWQgFcsYqwGA1bllCjeJHjQzKzJW2VQzjM39E37SU1-TRvWrlaRhzVpY6t2Qwp907w1becS1a8lvSWtKFyqsqQrlwW6oTq4Kd4'
const user = 'yasunakathiago@gmail.com'


const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user,
    clientId,
    clientSecret,
    refreshToken,
    accessToken
  }
})


const send = ({ email, name, message }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const emailMessage = {
    from,
    to: 'yasunakathiago@gmail.com',
    subject: `New message from ${from}`,
    text: message,
    replyTo: from
  }
  return new Promise((res, rej) => {
    transporter.sendMail(emailMessage, (err, info) =>
      err ? rej(err) : res(info))
  })
}

export default (req, res) => {
  const { email, name, message } = req.body
  send({ email, name, message }).then(() => {
    res.send({ ok: true, data: req.body })
  }).catch(error => {
    res.send({ ok: false, data: error })
  })
}