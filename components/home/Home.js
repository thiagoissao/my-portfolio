import React from 'react'
import Grid from '@material-ui/core/Grid'
import Banner from './Banner'
import Info from './Info'

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Banner />
      </Grid>
      <Grid item xs={12}>
        <Info />
      </Grid>
    </Grid>
  )
}

export default Home 