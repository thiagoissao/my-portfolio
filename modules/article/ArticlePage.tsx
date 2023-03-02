import { Container } from '@mui/material';
import { Montserrat } from '@next/font/google';
import hljs from 'highlight.js';
import md from 'markdown-it';
import { theme } from '../../styles/theme';
import Header from './Header';

// change some default config of ubuntu fonts
const ubuntu = Montserrat({
  weight: '400',
  subsets: ['latin'],
});

var markdown = md({
  linkify: true,
  html: true,
  highlight: function (str, lang) {
    var slang = lang.split('--')[0]; // allows multiple language tabs for the same language
    if (slang && hljs.getLanguage(slang)) {
      try {
        return (
          '<pre class="highlight-tab-tab' +
          '"><code>' +
          hljs.highlight(str, { language: lang }).value +
          '</code></pre>'
        );
      } catch (__) {}
    }

    return '';
  },
}).use(require('markdown-it-lazy-headers'));

interface ArticlePageProps {
  readingTime: {
    text: string;
  };
  title: string;
  description: string;
  updatedAt: string;
  createdAt: string;
  content: string;
  slug: string;
  coverImage: string;
}

const ArticlePage = ({
  readingTime,
  title,
  description,
  updatedAt,
  createdAt,
  content,
  coverImage,
}: ArticlePageProps) => {
  return (
    <Container maxWidth="sm" disableGutters>
      <Header
        readingTime={readingTime}
        title={title}
        description={description}
        createdAt={createdAt}
        updatedAt={updatedAt}
        coverImage={coverImage}
      />
      <div
        style={{ color: theme.palette.text.primary }}
        className={ubuntu.className}
        dangerouslySetInnerHTML={{ __html: markdown.render(content) }}
      />
    </Container>
  );
};

export default ArticlePage;
