import React from 'react';
import NextLink from 'next/link';
import { ArticleType } from './article.types';
import { format } from 'date-fns';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import { Grid, Typography } from '@mui/material';

interface ArticleProps {
  article: ArticleType;
}

const Article = ({ article }: ArticleProps) => (
  <NextLink as={`/blog/${article.slug}`} href="/blog/[slug]">
    <a href="/blog" style={{ textDecoration: 'none' }}>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <BookRoundedIcon color="primary" />
        </Grid>
        <Grid item xs>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary">{`${format(
                new Date(article.date),
                'MM/dd/yyyy'
              )} - ${article.timeReading.text}`}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="textPrimary" variant="h6">
                {article.title}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </a>
  </NextLink>
);

export default Article;
