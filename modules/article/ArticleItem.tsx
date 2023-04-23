import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { getBestTimeFormat } from '../../utils/dates';
import { IArticle } from './interfaces/article.interface';
import { sxDescription } from './styles/sx-description';

interface ArticleProps {
  article: IArticle;
}

const ArticleItem = ({ article }: ArticleProps) => {
  return (
    <Stack spacing={2} direction={'row'}>
      <Image
        width={164}
        height={164}
        src={article.coverImage}
        alt={article.description}
        style={{ aspectRatio: '1' }}
      />
      <Stack height="100%" alignItems="space-between">
        <Stack marginBottom={1} direction="row" spacing={1} alignItems="center">
          <Image
            alt={`picture of ${article.author.name}`}
            width={24}
            height={24}
            style={{ borderRadius: '100%' }}
            src={article.author.picture}
          />
          <Typography variant="body2" color="textSecondary">
            {article.author.name}
          </Typography>
          <div
            style={{
              width: 4,
              height: 4,
              backgroundColor: 'grey',
              borderRadius: '100%',
            }}
          />
          <Typography variant="body2" color="textSecondary">
            postado {getBestTimeFormat(new Date(article.createdAt))}
          </Typography>
        </Stack>
        <Typography color="textPrimary" variant="h6">
          {article.title}
        </Typography>
        <Typography gutterBottom color="textSecondary" sx={sxDescription}>
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
  );
};

export default ArticleItem;
