import BookRoundedIcon from '@mui/icons-material/BookRounded';
import { Grid, Typography } from '@mui/material';
import { format } from 'date-fns';
import NextLink from 'next/link';
import { ArticleType } from './interfaces/article-type.interface';

interface ArticleProps {
  article: ArticleType;
}

const Article = ({ article }: ArticleProps) => (
  <NextLink style={{ textDecoration: 'none' }} href={`/blog/${article.slug}`}>
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
  </NextLink>
);

export default Article;
