import React from 'react';
import {
  ArticleType,
  BlogArticleType,
} from '../components/articles/article.types';
import Home from '../components/home/Home';
import { api } from '../utils/lib';

type IndexProps = {
  articles: ArticleType[];
};

const Index = ({ articles }: IndexProps) => {
  return <Home articles={articles} />;
};

export const getStaticProps = async () => {
  const articles: Array<BlogArticleType> = api.getAllArticles([
    'slug',
    'title',
    'description',
    'date',
    'coverImage',
    'excerpt',
    'timeReading',
    'ogImage',
    'content',
  ]);
  return {
    props: { articles },
  };
};
export default Index;
