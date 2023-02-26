import { Container } from '@mui/material';
import hljs from 'highlight.js';
import md from 'markdown-it';
import Header from './Header';

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
  date: string;
  content: string;
  slug: string;
}

const ArticlePage = ({
  readingTime,
  title,
  description,
  date,
  content,
}: ArticlePageProps) => {
  return (
    <Container maxWidth="sm">
      <Header
        readingTime={readingTime}
        title={title}
        description={description}
        date={date}
      />
      <div dangerouslySetInnerHTML={{ __html: markdown.render(content) }} />
    </Container>
  );
};

export default ArticlePage;
