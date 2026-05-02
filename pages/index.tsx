import { useIntl } from 'react-intl';
import { IArticle } from '../modules/article/interfaces/article.interface';
import Template from '../modules/global/Template';
import Home from '../modules/home/Home';
import { api } from '../utils/lib';
import { FIRST_NAME, LAST_NAME } from '../utils/constants';

type IndexProps = {
  articles: IArticle[];
};

const Index = ({ articles }: IndexProps) => {
  const intl = useIntl();
  const fullName = `${FIRST_NAME} ${LAST_NAME}`;
  return (
    <Template
      title={fullName}
      ogProperty={{
        description: intl.formatMessage({ id: 'meta.home.description' }),
        title: fullName,
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
