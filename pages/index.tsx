import React from 'react';
import {
  ArticleType,
  BlogArticleType,
} from '../components/articles/article.types';
import Template from '../components/global/Template';
import Home from '../components/home/Home';
import { api } from '../utils/lib';

type IndexProps = {
  articles: ArticleType[];
};

const Index = ({ articles }: IndexProps) => {
  return (
    <Template>
      <Home articles={articles} />
    </Template>
  );
};

export const getStaticProps = async () => {
  const articles: Array<BlogArticleType> = api.getAllArticles();
  return {
    props: { articles },
  };
};
export default Index;
