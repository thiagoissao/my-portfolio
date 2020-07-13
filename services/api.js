import fetch from 'isomorphic-unfetch'

export const sendEmail = async body => {
  const response = await fetch('http://localhost:3000/api/contact', {
    body: JSON.stringify(body),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  if (response.ok) {
    return { ok: true, data }
  }
  return response
}

export default { sendEmail }