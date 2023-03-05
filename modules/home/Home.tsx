import { Box, Divider, Stack } from '@mui/material';
import Articles from '../article/ArticleList';
import { IArticle } from '../article/interfaces/article.interface';
import MediumArticles from '../medium-articles/MediumArticles';
import Aboutme from './Aboutme';
import Banner from './Banner';
import Experiences from './Experiences';

type HomeProps = {
  articles: IArticle[];
};

const Home = ({ articles }: HomeProps) => {
  return (
    <Stack>
      <Banner />
      <Box marginY={3}>
        <Divider light />
      </Box>
      <Articles articles={articles} />
      <Box marginY={3}>
        <Divider light />
      </Box>
      <MediumArticles />
      <Box marginY={3}>
        <Divider light />
      </Box>
      <Experiences />
      <Box marginY={3}>
        <Divider light />
      </Box>
      <Aboutme />
    </Stack>
  );
};

export default Home;
