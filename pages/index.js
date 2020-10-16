
import React from 'react'
import Layout from '../components/Layout'
import Home from '../components/home/Home'
import api from '../services/api'

const MAIN_BANNER_ID = '7GnLxvbRq8s'

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
  const response = await api.getImage(MAIN_BANNER_ID)
  if (response.ok) {
    return {
      props: {
        mainBannerUrl: response.data.urls.full
      }
    }
  }
}

export default Index