import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Banner from './Banner'
import Info from './Info'
import { Container } from '@material-ui/core'

const Home = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid item xs={12}>
          <Info />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
