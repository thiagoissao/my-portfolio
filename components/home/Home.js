import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Banner from './Banner'
import Info from './Info'
import Contacts from './Contacts'
import api from '../../services/api'
import * as R from 'ramda'

const MAIN_BANNER_ID = 'OVbeSXRk_9E'
const INFO_BANNER_ID = 'OQMZwNd3ThU'
const CONTACT_BANNER_ID = 'snNHKZ-mGfE'

const Home = () => {

  const [banners, setBanners] = useState({
    mainBannerUrl: '',
    aboutBannerUrl: '',
    contactBannerUrl: ''
  })

  const getBanners = async () => {
    const response1 = await api.getImage(MAIN_BANNER_ID)
    const response2 = await api.getImage(INFO_BANNER_ID)
    const response3 = await api.getImage(CONTACT_BANNER_ID)
    if (response3.ok && response2.ok && response1.ok) {
      setBanners({
        mainBannerUrl: response1.data.urls.full,
        contactBannerUrl: response3.data.urls.full,
        aboutUrl: response2.data.urls.full
      })
    }
  }

  useEffect(() => {
    getBanners()
  }, [])

  if (R.isEmpty(banners.mainBannerUrl)) {
    return <h1>loading</h1>
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Banner bannerUrl={banners.mainBannerUrl} />
      </Grid>
      <Grid item xs={12}>
        <Info bannerUrl={banners.aboutUrl} />
      </Grid>
      <Grid item xs={12}>
        <Contacts bannerUrl={banners.contactBannerUrl} />
      </Grid>
    </Grid>
  )
}

export default Home 