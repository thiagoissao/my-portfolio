import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Banner from './Banner'
import Info from './Info'

const Home = ({ mainBannerUrl, contactBannerUrl, aboutUrl }) => {
  return (
    <Grid container style={{
      backgroundImage: `url(${mainBannerUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      minHeight: '200vh'
    }}>
      <Grid item xs={12}>
        <Banner bannerUrl={mainBannerUrl} />
      </Grid>
      <Grid item xs={12}>
        <Info bannerUrl={aboutUrl} />
      </Grid>
    </Grid>
  )
}

export default Home 