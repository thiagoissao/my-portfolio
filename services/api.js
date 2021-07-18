import fetch from 'isomorphic-unfetch'

const BASIN_URL = 'https://usebasin.com/f/aa917706d20d'

export const sendEmail = async (body) => {
  try {
    const response = await fetch(BASIN_URL, {
      body: JSON.stringify(body),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return {
      ok: true,
      data: response.data,
    }
  } catch (error) {
    return {
      ok: false,
      error,
    }
  }
}

export default { sendEmail }
