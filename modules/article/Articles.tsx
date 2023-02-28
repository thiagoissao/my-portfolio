import { Box, Stack, SxProps, Typography } from '@mui/material';
import { theme } from '../../styles/theme';
import Title from '../Title';
import ArticleItem from './Article';
import { IArticle } from './interfaces/article.interface';

type ArticlesProps = {
  articles: IArticle[];
};

const sxBeta: SxProps = {
  borderRadius: theme.spacing(3),
  backgroundColor: '#0097a7',
  color: '#FAFAFA',
};

const Articles = ({ articles }: ArticlesProps) => {
  return (
    <Stack spacing={2}>
      <Stack alignItems="flex-end" direction="row" spacing={1}>
        <Title title="Blog" />
        <Box paddingX={1} sx={sxBeta}>
          <Typography>Beta Version</Typography>
        </Box>
      </Stack>
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
