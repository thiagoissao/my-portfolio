import Articles from '../modules/article/Articles';
import { ArticleType } from '../modules/article/interfaces/article-type.interface';
import { BlogArticleType } from '../modules/article/interfaces/blog-article-type.interface';
import Template from '../modules/global/Template';
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
