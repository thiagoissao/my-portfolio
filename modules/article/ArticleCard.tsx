import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { getBestTimeFormat } from '../../utils/dates';
import { IArticle } from './interfaces/article.interface';
import { sxDescription } from './styles/sx-description';

interface ArticleProps {
  article: IArticle;
}

const ArticleCard = ({ article }: ArticleProps) => {
  return (
    <Stack>
      <Stack spacing={2} direction={'row'}>
        <Image
          width={72}
          height={72}
          src={article.coverImage}
          alt={article.description}
        />
        <Stack height="100%" alignItems="space-between">
          <Stack direction="row" spacing={1} alignItems="center">
            <Image
              alt={`picture of ${article.author.name}`}
              width={24}
              height={24}
              style={{ borderRadius: '100%' }}
              src={article.author.picture}
            />
            <Typography variant="body2" color="textPrimary">
              {article.author.name}
            </Typography>
          </Stack>

          <Typography
            color="textSecondary"
            fontSize={12}
          >{`atualizado ${getBestTimeFormat(
            new Date(article.updatedAt)
          )}`}</Typography>
        </Stack>
      </Stack>
      <Stack>
        <Typography color="textPrimary">{article.title}</Typography>
        <Typography variant="body2" color="textSecondary" sx={sxDescription}>
          {article.description}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ArticleCard;
