import axios from 'axios';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import ArticlePage from '../../modules/article/ArticlePage';
import Template from '../../modules/global/Template';
import { normalizeImageSrc } from '../../utils/images';
import { api } from '../../utils/lib';

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
}

const Index = ({ readingTime, frontMatter }: Props) => {
  return (
    <Template
      title={frontMatter.title}
      ogProperty={{
        description: frontMatter.description,
        title: frontMatter.title,
        image: frontMatter.coverImage,
        type: 'article',
      }}
    >
      <ArticlePage
        readingTime={readingTime}
        title={frontMatter.title}
        createdAt={frontMatter.createdAt}
        content={frontMatter.content}
        coverImage={frontMatter.coverImage}
      />
    </Template>
  );
};

type Params = { params: { id: string } };

export async function getStaticProps({ params }: Params) {
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
      coverImage: normalizeImageSrc(data.bannerUrl) || null,
    },
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
