
import React from 'react'
import Layout from '../components/Layout'
import Home from '../components/home/Home'
import api from '../services/api'

const MAIN_BANNER_ID = 'OVbeSXRk_9E'
const INFO_BANNER_ID = 'OQMZwNd3ThU'
const CONTACT_BANNER_ID = 'snNHKZ-mGfE'

const Index = ({
  mainBannerUrl,
  aboutUrl,
  contactBannerUrl
}) => {
  return (
    <Layout>
      <Home
        mainBannerUrl={mainBannerUrl}
        contactBannerUrl={contactBannerUrl}
        aboutUrl={aboutUrl}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const response1 = await api.getImage(MAIN_BANNER_ID)
  const response2 = await api.getImage(INFO_BANNER_ID)
  const response3 = await api.getImage(CONTACT_BANNER_ID)
  if (response3.ok && response2.ok && response1.ok) {
    return {
      props: {
        mainBannerUrl: response1.data.urls.full,
        contactBannerUrl: response3.data.urls.full,
        aboutUrl: response2.data.urls.full
      }
    }
  }
}

export default Index