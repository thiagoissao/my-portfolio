import React from 'react';
import Banner from './Banner';
import Experiences from './Experiences';
import Aboutme from './Aboutme';
import Articles from '../articles/Articles';
import { ArticleType } from '../articles/article.types';
import MediumArticles from '../medium-articles/MediumArticles';
import { Box, Container, Divider, Stack } from '@mui/material';

type HomeProps = {
  articles: ArticleType[];
};

const Home = ({ articles }: HomeProps) => {
  return (
    <Container maxWidth="md">
      <Box marginY={2}>
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
      </Box>
    </Container>
  );
};

export default Home;
