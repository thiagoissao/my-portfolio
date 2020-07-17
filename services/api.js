import fetch from 'isomorphic-unfetch'

const UNSPLASH = {
  accessKey: 'HPiMNUdlyge7cfnIp-5i-le1YTJscTmF5o61OqShR7A',
  secretKey: '7crl6q_83wGofLW5rJnViIyfkB7hqfz3ystTXkZVixk',
  baseUrl: 'https://api.unsplash.com',
}

export const getImage = async id => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Client-ID ${UNSPLASH.accessKey}`
    }
  }
  const response = await fetch(`${UNSPLASH.baseUrl}/photos/${id}`, options)

  if (response.ok) {
    return {
      ok: true,
      data: await response.json()
    }
  }
  return response
}

export const sendEmail = async body => {
  const response = await fetch('http://localhost:3000/api/contact', {
    body: JSON.stringify(body),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (response.ok) {
    return await response.json()
  }
}

export default { sendEmail, getImage }