import BookRoundedIcon from '@mui/icons-material/BookRounded';
import { Grid, Typography } from '@mui/material';
import { format } from 'date-fns';
import NextLink from 'next/link';
import { IArticle } from './interfaces/article-type.interface';

interface ArticleProps {
  article: IArticle;
}

const Article = ({ article }: ArticleProps) => (
  <NextLink style={{ textDecoration: 'none' }} href={`/blog/${article.id}`}>
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
            )}`}</Typography>
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
