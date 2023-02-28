import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import { getBestTimeFormat } from '../../utils/dates';
import { IArticle } from './interfaces/article.interface';

interface ArticleProps {
  article: IArticle;
}

const Article = ({ article }: ArticleProps) => (
  <NextLink style={{ textDecoration: 'none' }} href={`/blog/${article.id}`}>
    <Stack spacing={2} direction="row">
      <Image
        width={164}
        height={164}
        src={article.coverImage}
        alt={article.description}
      />
      <Stack height="100%" alignItems="space-between">
        <Typography color="textPrimary" variant="h6">
          {article.title}
        </Typography>
        <Typography gutterBottom color="textSecondary">
          {article.description}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
        >{`atualizado ${getBestTimeFormat(
          new Date(article.updatedAt)
        )}`}</Typography>
      </Stack>
    </Stack>
  </NextLink>
);

export default Article;
