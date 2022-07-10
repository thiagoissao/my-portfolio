import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box, Container, Divider } from '@material-ui/core';
import Banner from './Banner';
import Info from './Info';
import Articles from './Articles';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid item xs={12}>
          <Divider light />
        </Grid>
        <Grid item xs={12}>
          <Info />
        </Grid>
        <Grid item xs={12}>
          <Divider light />
        </Grid>
        <Grid item xs={12}>
          <Articles />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
