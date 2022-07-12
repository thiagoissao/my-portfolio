import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container, Divider } from '@material-ui/core';
import Banner from './Banner';
import Experiences from './Experiences';
import Aboutme from './Aboutme';
import Articles from '../articles/Articles';
import { ArticleType } from '../articles/article.types';
import MediumArticles from '../medium-articles/MediumArticles';

type HomeProps = {
  articles: ArticleType[];
};

const Home = ({ articles }: HomeProps) => {
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
          <MediumArticles />
        </Grid>
        <Grid item xs={12}>
          <Divider light />
        </Grid>
        <Grid item xs={12}>
          <Articles articles={articles} />
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
