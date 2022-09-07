import React from 'react';
import readingTime from 'reading-time';
import mdxPrism from 'mdx-prism';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { NextSeo } from 'next-seo';
import { api } from '../../utils/lib';
import { BlogArticleType } from '../../components/articles/article.types';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkExternalLinks from 'remark-external-links';
import remarkAutoLinkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';
import remarkCodeTitles from 'remark-code-titles';
import remarkCapitalize from 'remark-capitalize';
import remarkImages from 'remark-images';
import ArticlePage from '../../components/articles/ArticlePage';
import Template from '../../components/global/Template';

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
