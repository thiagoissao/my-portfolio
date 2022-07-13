import { Container } from '@mui/material';
import React from 'react';
import Header from './Header';

interface ArticlePageProps {
  readingTime: {
    text: string;
  };
  title: string;
  description: string;
  date: string;
  content: React.ReactNode;
  slug: string;
}

const ArticlePage = ({
  readingTime,
  title,
  description,
  date,
  content,
}: ArticlePageProps) => (
  <Container maxWidth="sm">
    <Header
      readingTime={readingTime}
      title={title}
      description={description}
      date={date}
    />
    {content}
  </Container>
);

export default ArticlePage;
