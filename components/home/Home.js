import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Banner from './Banner'
import Info from './Info'

const Home = ({ mainBannerUrl, contactBannerUrl, aboutUrl }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Banner bannerUrl={mainBannerUrl} />
      </Grid>
      <Grid item xs={12}>
        <Info bannerUrl={aboutUrl} />
      </Grid>
      <Grid item xs={12}>
        {/* <Contacts bannerUrl={contactBannerUrl} /> */}
      </Grid>
    </Grid>
  )
}

export default Home 