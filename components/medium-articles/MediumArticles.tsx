import { Divider, Stack } from '@mui/material';
import React from 'react';
import Title from '../Title';
import MediumArticle from './MediumArticle';

const articles = [
  {
    id: '1',
    name: 'React Hooks — useState e useEffect',
    description:
      'No artigo de hoje vamos falar um pouco sobre as hooks, para que elas servem e o que podemos fazer com elas. As hooks foram introduzidas na…',
    url: 'https://thiagoyasunaka.medium.com/react-hooks-usestate-e-useeffect-c85df29ad489',
    imageUrl: '/articles/1.png',
    createdAt: new Date(2021, 5, 24),
  },
  {
    id: '2',
    name: 'React Basics — Renderização e Gerenciamento de estados',
    description:
      'No artigo de hoje iremos abordar tratamento de estados, como podemos gerenciá-los e como isso afeta as renderizações em uma aplicação...',
    url: 'https://thiagoyasunaka.medium.com/react-basics-renderiza%C3%A7%C3%A3o-e-gerenciamento-de-estados-aeda8ebe58a',
    imageUrl: '/articles/2.png',
    createdAt: new Date(2021, 2, 18),
  },
  {
    id: '3',
    name: 'React.JS— Introdução',
    description:
      'Vamos falar um pouco sobre o desenvolvimento web e depois falaremos sobre React.JS, um framework desenvolvido pela equipe do Facebook...',
    url: 'https://thiagoyasunaka.medium.com/react-js-introdu%C3%A7%C3%A3o-95af830b8a8d?source=your_stories_page-------------------------------------',
    imageUrl: '/articles/3.png',
    createdAt: new Date(2021, 2, 10),
  },
];

const MediumArticles = () => {
  return (
    <Stack spacing={2}>
      <Title title="My medium articles" />
      <Stack spacing={2}>
        {articles.map((article, index) => (
          <React.Fragment key={article.url}>
            <MediumArticle article={article} />
            {index < articles.length - 1 && <Divider light variant="middle" />}
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default MediumArticles;
