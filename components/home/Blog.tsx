import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Title from '../Title';

const Blog = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Title title="Blog" />
      </Grid>
      <Grid item xs={12}>
        <Typography color="primary" align="justify">
          Here are some latest of my writing
        </Typography>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default Blog;
