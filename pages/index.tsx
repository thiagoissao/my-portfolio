import { IArticle } from '../modules/article/interfaces/article.interface';
import Template from '../modules/global/Template';
import Home from '../modules/home/Home';
import { api } from '../utils/lib';

type IndexProps = {
  articles: IArticle[];
};

const Index = ({ articles }: IndexProps) => {
  return (
    <Template
      title="Thiago Yasunaka"
      ogProperty={{
        description: 'homepage',
        title: 'Thiago Yasunaka',
      }}
    >
      <Home articles={articles} />
    </Template>
  );
};

export const getStaticProps = async () => {
  try {
    const articles = await api.getAllGists();
    return { props: { articles } };
  } catch (err) {
    console.warn('Failed to load gists for index:', (err as Error).message);
    return { props: { articles: [] } };
  }
};
export default Index;
