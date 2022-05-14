import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box, Container, Divider } from '@material-ui/core';
import Banner from './Banner';
import Info from './Info';
import Articles from './Articles';
import Contact from './Contact';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid item xs={12}>
          <Box marginY={4}>
            <Divider light variant="middle" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Info />
        </Grid>
        <Grid item xs={12}>
          <Box marginY={4}>
            <Divider light variant="middle" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Articles />
        </Grid>
        <Grid item xs={12}>
          <Box marginY={4}>
            <Divider light variant="middle" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
