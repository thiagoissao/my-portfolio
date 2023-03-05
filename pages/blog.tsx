import Articles from '../modules/article/ArticleList';
import { GithubGist } from '../modules/article/dtos/github-gist.dto';
import { IArticle } from '../modules/article/interfaces/article.interface';
import Template from '../modules/global/Template';
import { api } from '../utils/lib';

type BlogProps = {
  articles: IArticle[];
  gists: GithubGist[];
};

const Blog = ({ articles, gists }: BlogProps) => {
  return (
    <Template
      ogProperty={{
        description: '',
        image: '',
        title: 'Thiago Yasunaka',
        url: '',
      }}
      title="Posts"
    >
      <Articles articles={articles} />
    </Template>
  );
};

export const getStaticProps = async () => {
  const articles = await api.getAllGists();

  return {
    props: { articles },
  };
};

export default Blog;
