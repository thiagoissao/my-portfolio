import { Stack, Typography } from '@mui/material';
import Title from '../Title';
import ArticleItem from './Article';
import { IArticle } from './interfaces/article-type.interface';

type ArticlesProps = {
  articles: IArticle[];
};

const Articles = ({ articles }: ArticlesProps) => {
  return (
    <Stack spacing={2}>
      <Title title="Blog" />
      <Typography color="textPrimary" align="justify">
        Here are some of my latest writings
      </Typography>
      <Stack spacing={1}>
        {articles.map((article: IArticle) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Articles;
