import React from 'react';
import { Grid, Typography, makeStyles, Divider } from '@material-ui/core';
import Title from '../Title';
import Article from './Article';

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

const Articles = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Title title="My medium articles" />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {articles.map((article, index) => (
            <>
              <Grid item xs={12} key={article.url}>
                <Article article={article} />
              </Grid>
              {index < articles.length - 1 && (
                <Grid item xs={12}>
                  <Divider light variant="middle" />
                </Grid>
              )}
            </>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Articles;
