import { GetStaticProps } from 'next';
import Articles from '../modules/article/ArticleList';
import { IArticle } from '../modules/article/interfaces/article.interface';
import Template from '../modules/global/Template';
import { api } from '../utils/lib';

type BlogProps = {
  articles: IArticle[];
};

const Blog = ({ articles }: BlogProps) => {
  return (
    <Template
      ogProperty={{
        description: 'Thiago Yasunaka blog posts',
        title: 'Blog posts',
      }}
      title="Posts"
    >
      <Articles articles={articles} />
    </Template>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = await api.getAllGists();

  return {
    props: { articles },
  };
};

export default Blog;
