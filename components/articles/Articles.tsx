import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Title from '../Title';
import { ArticleType } from './article.types';
import ArticleItem from './Article';

type ArticlesProps = {
  articles: ArticleType[];
};

const Articles = ({ articles }: ArticlesProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Title title="Blog" />
      </Grid>
      <Grid item xs={12}>
        <Typography color="primary" align="justify">
          Here are some of my latest writings
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          {articles.map((article: ArticleType) => (
            <Grid item key={article.slug} xs={12}>
              <ArticleItem article={article} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Articles;
