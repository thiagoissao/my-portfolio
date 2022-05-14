import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import Title from '../Title';
import Article from './Article';
import { articles } from './articles';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    padding: theme.spacing(3),
  },
}));

const Articles = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Title title="My Articles" />
        </Grid>
        <Grid item xs={12}>
          <Typography color="primary">
            One of my favorite things that i like to do when i have time is
            write some articles. You can check some of them below:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {articles.map(article => (
              <Grid item sm={6} md={4} key={article.url}>
                <Article article={article} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Articles;
