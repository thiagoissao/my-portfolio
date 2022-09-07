import {
  ArticleType,
  BlogArticleType,
} from '../components/articles/article.types';
import Articles from '../components/articles/Articles';
import Template from '../components/global/Template';
import { api } from '../utils/lib';

type BlogProps = {
  articles: ArticleType[];
};

const Blog = ({ articles }: BlogProps) => {
  return (
    <Template>
      <Articles articles={articles} />
    </Template>
  );
};

export const getStaticProps = async () => {
  const articles: Array<BlogArticleType> = api.getAllArticles();
  return {
    props: { articles },
  };
};

export default Blog;
