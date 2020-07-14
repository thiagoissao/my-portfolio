const nodemailer = require('nodemailer')

const clientId = '587242485114-i9nmmosit19tlngmbk6qfbtbsa26bcso.apps.googleusercontent.com'
const clientSecret = 'v_TlLrpq1ax68H-_4rtNxkJO'
const refreshToken = '1//0fou0SineZwl2CgYIARAAGA8SNgF-L9IrmhKc0Svu78TrN7_yaIJSEnvLz8ggejAr9u9o5W4YuaXRpguGeTDpmnA4Hec71Y2Gqw'
const accessToken = 'ya29.a0AfH6SMBKd2voevixgF50r6imlXFBlRTZHWNT6AnuPg0tV6z4JOEO4xCUZmMBbMTejz9SGFKH_TbR5n7DL0Q9x1L47DJJaYvojzBXgEU8DPNhjk3gf-xgEyoAg_5Dx45Phv3O78xie8_tEuMZ9RMWsBZr2mqDeNy9Wmk'
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
    transporter.sendMail(emailMessage, (err, info) => {
      err ? rej(err) : res(info)
    })
  })
}

export default (req, res) => {
  const { email, name, message } = req.body
  send({ email, name, message }).then(() => {
    console.log('success')
    res.send('success')
  }).catch(error => {
    console.log('failed', error)
    res.send(error)
  })
}