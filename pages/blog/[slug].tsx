import mdxPrism from 'mdx-prism';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { NextSeo } from 'next-seo';
import readingTime from 'reading-time';
import {
  default as remarkAutolinkHeadings,
  default as remarkAutoLinkHeadings,
} from 'remark-autolink-headings';
import remarkCapitalize from 'remark-capitalize';
import remarkCodeTitles from 'remark-code-titles';
import remarkExternalLinks from 'remark-external-links';
import remarkImages from 'remark-images';
import remarkSlug from 'remark-slug';
import ArticlePage from '../../modules/article/ArticlePage';
import { BlogArticleType } from '../../modules/article/interfaces/blog-article-type.interface';
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
  source: any;
  tags: Array<string>;
}

const Index = ({ readingTime, frontMatter, slug, source }: Props) => {
  const content = hydrate(source);

  return (
    <Template>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
      />
      <ArticlePage
        readingTime={readingTime}
        title={frontMatter.title}
        description={frontMatter.description}
        date={frontMatter.date}
        content={content}
        slug={slug}
      />
    </Template>
  );
};

type Params = {
  params: {
    slug: string;
    timeReading: {
      text: string;
    };
  };
};

export async function getStaticProps({ params }: Params) {
  const { content, data } = api.getRawArticleBySlug(params.slug);
  const mdxSource = await renderToString(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkAutolinkHeadings,
        remarkExternalLinks,
        remarkAutoLinkHeadings,
        remarkSlug,
        remarkCodeTitles,
        remarkCapitalize,
        remarkImages,
      ],
      rehypePlugins: [mdxPrism],
    },
  });
  const tags = data.tags ?? [];
  return {
    props: {
      slug: params.slug,
      readingTime: readingTime(content),
      source: mdxSource,
      frontMatter: data,
      tags,
    },
  };
}

export async function getStaticPaths() {
  const articles: Array<BlogArticleType> = api.getAllArticles(['slug']);
  return {
    paths: articles.map(articles => {
      return {
        params: {
          slug: articles.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Index;
