import { Box, Stack, SxProps, Typography } from '@mui/material';
import NextLink from 'next/link';
import useWidth from '../../hooks/useWidth';
import { theme } from '../../styles/theme';
import Title from '../Title';
import ArticleCard from './ArticleCard';
import ArticleItem from './ArticleItem';
import { IArticle } from './interfaces/article.interface';

type ArticleListProps = {
  articles: IArticle[];
};

const sxBeta: SxProps = {
  borderRadius: theme.spacing(3),
  backgroundColor: '#0097a7',
  color: '#FAFAFA',
};

const ArticleList = ({ articles }: ArticleListProps) => {
  const width = useWidth();
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
          <NextLink
            key={article.id}
            style={{ textDecoration: 'none' }}
            href={`/blog/${article.id}`}
          >
            {width === 'xs' ? (
              <ArticleCard article={article} />
            ) : (
              <ArticleItem article={article} />
            )}
          </NextLink>
        ))}
      </Stack>
    </Stack>
  );
};

export default ArticleList;
