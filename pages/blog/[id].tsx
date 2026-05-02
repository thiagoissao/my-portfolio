import axios from 'axios';
import matter from 'gray-matter';
import { NextSeo } from 'next-seo';
import readingTime from 'reading-time';
import ArticlePage from '../../modules/article/ArticlePage';
import Template from '../../modules/global/Template';
import { api } from '../../utils/lib';

interface Related {
  id: string;
  title: string;
  createdAt: string;
  number: string;
}

interface Props {
  readingTime: { text: string };
  frontMatter: {
    title: string;
    description: string;
    updatedAt: string;
    createdAt: string;
    content: string;
    coverImage?: string;
  };
  slug: string;
  number: string;
  related: Related[];
}

const pad = (n: number) => String(n).padStart(3, '0');

const Index = ({ readingTime, frontMatter, slug, number, related }: Props) => {
  return (
    <Template
      title={frontMatter.title}
      ogProperty={{
        description: frontMatter.description,
        title: frontMatter.title,
      }}
    >
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
      />
      <ArticlePage
        readingTime={readingTime}
        title={frontMatter.title}
        description={frontMatter.description}
        updatedAt={frontMatter.updatedAt}
        createdAt={frontMatter.createdAt}
        content={frontMatter.content}
        slug={slug}
        coverImage={frontMatter.coverImage}
        number={number}
        related={related}
      />
    </Template>
  );
};

type Params = { params: { id: string } };

export async function getStaticProps({ params }: Params) {
  const articles = await api.getAllGists();
  const total = articles.length;
  const index = articles.findIndex(a => a.id === params.id);
  const number = pad(total - index);

  const related: Related[] = articles
    .filter(a => a.id !== params.id)
    .slice(0, 3)
    .map(a => ({
      id: a.id,
      title: a.title,
      createdAt: a.createdAt,
      number: pad(total - articles.findIndex(x => x.id === a.id)),
    }));

  const gist = await api.getGistById(params.id);
  const response = await axios.get<string>(gist.content);
  const { content, data } = matter(response.data);

  const props: Props = {
    slug: params.id,
    readingTime: readingTime(content),
    frontMatter: {
      content,
      updatedAt: gist.updatedAt,
      createdAt: gist.createdAt,
      description: data.description || '',
      title: data.title,
      coverImage: data.bannerUrl || null,
    },
    number,
    related,
  };

  return { props };
}

export async function getStaticPaths({ locales }: { locales?: string[] }) {
  const gists = await api.getAllGists();
  const localesToBuild = locales ?? [];
  const paths = gists.flatMap(gist =>
    localesToBuild.map(locale => ({
      params: { id: gist.id },
      locale,
    })),
  );
  return {
    paths,
    fallback: false,
  };
}

export default Index;
