import React from 'react';
import Title from '../Title';
import { ArticleType } from './article.types';
import ArticleItem from './Article';
import { Grid, Stack, Typography } from '@mui/material';

type ArticlesProps = {
  articles: ArticleType[];
};

const Articles = ({ articles }: ArticlesProps) => {
  return (
    <Stack spacing={2}>
      <Title title="Blog" />
      <Typography color="textPrimary" align="justify">
        Here are some of my latest writings
      </Typography>
      <Stack>
        {articles.map((article: ArticleType) => (
          <ArticleItem key={article.slug} article={article} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Articles;
