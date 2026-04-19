import { format } from 'date-fns';
import hljs from 'highlight.js';
import md from 'markdown-it';
import NextLink from 'next/link';
import Header from './Header';

const markdown = md({
  linkify: true,
  html: true,
  highlight: function (str, lang) {
    const slang = lang.split('--')[0];
    if (slang && hljs.getLanguage(slang)) {
      try {
        return (
          '<pre class="highlight-tab-tab"><code>' +
          hljs.highlight(str, { language: lang }).value +
          '</code></pre>'
        );
      } catch (__) {}
    }
    return '';
  },
}).use(require('markdown-it-lazy-headers'));

interface Related {
  id: string;
  title: string;
  createdAt: string;
  number: string;
}

interface ArticlePageProps {
  readingTime: { text: string };
  title: string;
  description: string;
  updatedAt: string;
  createdAt: string;
  content: string;
  slug: string;
  coverImage: string;
  number?: string;
  related?: Related[];
}

const ArticlePage = ({
  readingTime,
  title,
  description,
  updatedAt,
  createdAt,
  content,
  coverImage,
  number,
  related = [],
}: ArticlePageProps) => {
  return (
    <div id="article-page">
      <Header
        readingTime={readingTime}
        title={title}
        description={description}
        createdAt={createdAt}
        updatedAt={updatedAt}
        coverImage={coverImage}
        number={number}
      />

      <article className="article">
        <div
          className="body"
          dangerouslySetInnerHTML={{ __html: markdown.render(content) }}
        />

        <div className="end">
          <span>End · Thanks for reading</span>
          <div className="links">
            <NextLink href="/">Back to home</NextLink>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="related">
          <h4>Keep reading</h4>
          <div className="related-grid">
            {related.map(r => (
              <NextLink key={r.id} href={`/blog/${r.id}`} className="card">
                <div className="m">
                  № {r.number} · {format(new Date(r.createdAt), 'MMM dd')}
                </div>
                <div className="t">{r.title}</div>
              </NextLink>
            ))}
          </div>
        </section>
      )}

      <style jsx global>{`
        #article-page {
          font-family: 'Archivo', sans-serif;
          color: var(--ink);
          background: var(--paper);
          min-height: 100vh;
        }
        #article-page .article {
          max-width: 920px;
          margin: 0 auto;
          padding: 48px 40px 80px;
        }
        #article-page .body {
          font-family: 'Instrument Serif', serif;
        }
        #article-page .body p {
          font-size: 22px;
          line-height: 1.6;
          margin: 0 0 22px;
          color: var(--ink);
          max-width: 68ch;
        }
        #article-page .body h1,
        #article-page .body h2,
        #article-page .body h3,
        #article-page .body h4 {
          font-family: var(--title-font), sans-serif;
          font-weight: 600;
          letter-spacing: -0.005em;
          text-transform: uppercase;
          color: var(--ink);
        }
        #article-page .body h2 {
          font-size: 30px;
          margin: 48px 0 18px;
        }
        #article-page .body h3 {
          font-size: 22px;
          margin: 36px 0 14px;
        }
        #article-page .body blockquote {
          border-left: 2px solid var(--accent);
          margin: 28px 0;
          padding: 6px 0 6px 22px;
          font-family: 'Instrument Serif', serif;
          font-size: 22px;
          line-height: 1.4;
          color: var(--ink);
          max-width: 60ch;
        }
        #article-page .body pre,
        #article-page .body pre.highlight-tab-tab {
          background: #141414;
          color: #e9e5dc;
          padding: 18px 22px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          line-height: 1.6;
          margin: 22px 0;
          overflow: auto;
          border-left: 3px solid var(--accent);
          border-radius: 0;
        }
        #article-page .body code {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.92em;
          background: rgba(0, 0, 0, 0.05);
          padding: 2px 6px;
        }
        #article-page .body pre code {
          background: transparent;
          padding: 0;
        }
        #article-page .body a {
          color: var(--ink);
          border-bottom: 1px solid var(--accent);
        }
        #article-page .body img {
          max-width: 100%;
          margin: 28px 0;
          border: 1px solid var(--rule);
        }
        #article-page .body ul,
        #article-page .body ol {
          padding-left: 20px;
          margin: 0 0 22px;
          max-width: 68ch;
        }
        #article-page .body li {
          font-size: 18px;
          line-height: 1.65;
          margin: 0 0 8px;
        }
        #article-page .body table {
          border-collapse: collapse;
          width: 100%;
          margin: 24px 0;
          font-size: 14px;
        }
        #article-page .body th,
        #article-page .body td {
          padding: 10px 14px;
          text-align: left;
          border-bottom: 1px solid var(--rule);
        }
        #article-page .body th {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
          border-bottom-color: var(--rule-strong);
        }
        #article-page .end {
          margin-top: 48px;
          padding-top: 24px;
          border-top: 1px solid var(--rule);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--muted);
        }
        #article-page .end .links {
          display: flex;
          gap: 18px;
        }
        #article-page .end .links a {
          color: var(--ink);
          border-bottom: 1px solid var(--ink);
          padding-bottom: 1px;
        }

        #article-page .related {
          border-top: 1px solid var(--rule-strong);
          padding: 48px 40px;
          max-width: 1280px;
          margin: 0 auto;
        }
        #article-page .related h4 {
          font-family: var(--title-font), sans-serif;
          font-weight: 600;
          font-size: 28px;
          margin: 0 0 22px;
          text-transform: uppercase;
          letter-spacing: -0.005em;
        }
        #article-page .related-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 24px;
        }
        #article-page .related-grid .card {
          border-top: 2px solid var(--ink);
          padding-top: 14px;
          transition: background 0.2s;
        }
        #article-page .related-grid .card:hover {
          background: rgba(0, 0, 0, 0.03);
        }
        #article-page .related-grid .card:hover .t {
          color: var(--accent);
        }
        #article-page .related-grid .card .t {
          font-family: var(--title-font), sans-serif;
          font-weight: 500;
          font-size: 20px;
          line-height: 1.1;
          margin: 6px 0;
          transition: color 0.2s;
        }
        #article-page .related-grid .card .m {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
        }

        @media (max-width: 780px) {
          #article-page .article {
            padding: 28px 24px 60px;
          }
          #article-page .related-grid {
            grid-template-columns: 1fr;
          }
          #article-page .related {
            padding: 36px 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default ArticlePage;
