import { IArticle } from '../modules/article/interfaces/article-type.interface';
import Template from '../modules/global/Template';
import Home from '../modules/home/Home';
import { api } from '../utils/lib';

type IndexProps = {
  articles: IArticle[];
};

const Index = ({ articles }: IndexProps) => {
  return (
    <Template title="Thiago Yasunaka">
      <Home articles={articles} />
    </Template>
  );
};

export const getStaticProps = async () => {
  const articles = await api.getAllGists();
  return {
    props: { articles },
  };
};
export default Index;
