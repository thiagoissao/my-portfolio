const nodemailer = require('nodemailer')

const clientId =
  '587242485114-i9nmmosit19tlngmbk6qfbtbsa26bcso.apps.googleusercontent.com'
const clientSecret = 'v_TlLrpq1ax68H-_4rtNxkJO'
const refreshToken =
  '1//041xuqejkXDi-CgYIARAAGAQSNgF-L9IrNpfu8UnVQVLnB-5yTbTGbbN0YRqPNW7oMnWaNzui1zmqwkZimCMt_BmSZbZJRaWYeQ'
const accessToken =
  'ya29.a0AfH6SMBQCKGjyB_yiQWOByRSGWDrdJ8ejZgMDtcdZ4Z5CbNhVEPTIBCWxH67QeddngPQDb9ZTTmnbA3RR7ml_disjVt1_c78wSg0N9JsIuvQF4dMl-6Ta7RaDPt1kPp00-WW_L2JGpUyhPynaAONAcXqTfgYH7PKBtU'
const user = 'yasunakathiago@gmail.com'

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user,
    clientId,
    clientSecret,
    refreshToken,
    accessToken,
  },
})

const send = ({ email, name, message }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const emailMessage = {
    from,
    to: 'yasunakathiago@gmail.com',
    subject: `New message from ${from}`,
    text: message,
    replyTo: from,
  }
  return new Promise((res, rej) => {
    transporter.sendMail(emailMessage, (err, info) =>
      err ? rej(err) : res(info)
    )
  })
}

export default (req, res) => {
  const { email, name, message } = req.body
  send({ email, name, message })
    .then(() => {
      res.send({ ok: true, data: req.body })
    })
    .catch((error) => {
      res.send({ ok: false, data: error })
    })
}
