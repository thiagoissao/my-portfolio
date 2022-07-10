import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container, Divider } from '@material-ui/core';
import Banner from './Banner';
import Experiences from './Experiences';
import Articles from './Articles';
import Aboutme from './Aboutme';
import Blog from './Blog';

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
          <Articles />
        </Grid>
        <Grid item xs={12}>
          <Divider light />
        </Grid>
        <Grid item xs={12}>
          <Blog />
        </Grid>
        <Grid item xs={12}>
          <Divider light />
        </Grid>
        <Grid item xs={12}>
          <Experiences />
        </Grid>
        <Grid item xs={12}>
          <Divider light />
        </Grid>
        <Grid item xs={12}>
          <Aboutme />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
