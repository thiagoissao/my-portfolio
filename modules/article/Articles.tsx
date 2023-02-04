import { Stack, Typography } from '@mui/material';
import Title from '../Title';
import ArticleItem from './Article';
import { ArticleType } from './interfaces/article-type.interface';

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
