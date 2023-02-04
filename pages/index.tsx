import { ArticleType } from '../modules/article/interfaces/article-type.interface';
import { BlogArticleType } from '../modules/article/interfaces/blog-article-type.interface';
import Template from '../modules/global/Template';
import Home from '../modules/home/Home';
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
