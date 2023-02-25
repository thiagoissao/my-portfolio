import axios from 'axios';
import matter from 'gray-matter';
import { NextSeo } from 'next-seo';
import readingTime from 'reading-time';
import ArticlePage from '../../modules/article/ArticlePage';
import Template from '../../modules/global/Template';
import { api } from '../../utils/lib';

interface Props {
  readingTime: {
    text: string;
  };
  frontMatter: {
    title: string;
    description: string;
    date: string;
    content: string;
  };
  slug: string;
}

const Index = ({ readingTime, frontMatter, slug }: Props) => {
  return (
    <Template title={frontMatter.title}>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
      />
      <ArticlePage
        readingTime={readingTime}
        title={frontMatter.title}
        description={frontMatter.description}
        date={frontMatter.date}
        content={frontMatter.content}
        slug={slug}
      />
    </Template>
  );
};

type Params = {
  params: {
    id: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const gist = await api.getGistById(params.id);
  const response = await axios.get<string>(gist.content);

  const { content, data } = matter(response.data);

  const props: Props = {
    slug: params.id,
    readingTime: readingTime(content),
    frontMatter: {
      content,
      date: gist.date,
      description: data.description,
      title: data.title,
    },
  };

  return {
    props,
  };
}

export async function getStaticPaths() {
  const gists = await api.getAllGists();
  return {
    paths: gists.map(gist => {
      return {
        params: {
          id: gist.id,
        },
      };
    }),
    fallback: false,
  };
}

export default Index;