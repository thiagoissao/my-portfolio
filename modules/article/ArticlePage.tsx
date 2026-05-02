import { format } from 'date-fns';
import hljs from 'highlight.js';
import md from 'markdown-it';
import NextLink from 'next/link';
import { useEffect, useMemo, useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useActiveLocale, useDateFnsLocale } from '../../lib/i18n';
import { Locale } from '../../lib/i18n/locales';
import Header from './Header';

const escapeAttr = (s: string) =>
  s.replace(
    /[&<>"']/g,
    c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        c
      ] as string
  );

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

const RELATED_DATE_FORMAT: Record<Locale, string> = {
  [Locale.PT_BR]: "d 'de' MMM",
  [Locale.EN_US]: 'MMM d',
};

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
  const intl = useIntl();
  const activeLocale = useActiveLocale();
  const dfLocale = useDateFnsLocale();
  const relatedFormat = RELATED_DATE_FORMAT[activeLocale];

  const copyLabel = intl.formatMessage({ id: 'article.copyCode' });
  const copiedLabel = intl.formatMessage({ id: 'article.codeCopied' });

  const markdown = useMemo(() => {
    const instance = md({
      linkify: true,
      html: true,
      highlight: (str: string, lang: string) => {
        const slang = lang.split('--')[0];
        if (slang && hljs.getLanguage(slang)) {
          try {
            return (
              '<div class="code-block">' +
              `<button class="copy-btn" type="button" aria-label="${escapeAttr(copyLabel)}" data-copy-label="${escapeAttr(copyLabel)}" data-copied-label="${escapeAttr(copiedLabel)}">${escapeAttr(copyLabel)}</button>` +
              '<pre class="highlight-tab-tab"><code>' +
              hljs.highlight(str, { language: lang }).value +
              '</code></pre>' +
              '</div>'
            );
          } catch (__) {}
        }
        return '';
      },
    });
    instance.use(require('markdown-it-lazy-headers'));
    return instance;
  }, [copyLabel, copiedLabel]);

  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = bodyRef.current;
    if (!node) return;
    const onClick = async (e: Event) => {
      const target = e.target as Element | null;
      const btn = target?.closest?.('.copy-btn') as HTMLButtonElement | null;
      if (!btn || !node.contains(btn)) return;
      const pre = btn.parentElement?.querySelector('pre');
      const text = pre?.textContent ?? '';
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        return;
      }
      const original = btn.dataset.copyLabel ?? '';
      const copied = btn.dataset.copiedLabel ?? '';
      btn.textContent = copied;
      btn.classList.add('copied');
      window.setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove('copied');
      }, 1500);
    };
    node.addEventListener('click', onClick);
    return () => node.removeEventListener('click', onClick);
  }, []);

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
          ref={bodyRef}
          className="body"
          dangerouslySetInnerHTML={{ __html: markdown.render(content) }}
        />

        <div className="end">
          <span>
            <FormattedMessage id="article.endThanks" />
          </span>
          <div className="links">
            <NextLink href="/">
              <FormattedMessage id="article.backHome" />
            </NextLink>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="related">
          <h4>
            <FormattedMessage id="article.keepReading" />
          </h4>
          <div className="related-grid">
            {related.map(r => (
              <NextLink key={r.id} href={`/blog/${r.id}`} className="card">
                <div className="m">
                  № {r.number} ·{' '}
                  {format(new Date(r.createdAt), relatedFormat, {
                    locale: dfLocale,
                  })}
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
          padding: 20px 40px 80px;
        }
        #article-page .body {
          font-family: 'Raleway', sans-serif;
        }
        #article-page .body p {
          font-size: 20px;
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
          font-size: 20px;
          margin: 36px 0 14px;
        }
        #article-page .body blockquote {
          border-left: 2px solid var(--accent);
          margin: 28px 0;
          padding: 6px 0 6px 22px;
          font-family: 'Raleway', sans-serif;
          font-size: 20px;
          line-height: 1.6;
          color: var(--ink);
          max-width: 60ch;
        }
        #article-page .body .code-block {
          position: relative;
        }
        #article-page .body pre,
        #article-page .body pre.highlight-tab-tab {
          background: #2e343f;
          color: #d8dee9;
          padding: 16px;
          font-family:
            Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.6;
          margin: 22px 0;
          overflow: auto;
          border-radius: 8px;
        }
        #article-page .body .code-block pre,
        #article-page .body .code-block pre.highlight-tab-tab {
          margin: 0;
        }
        #article-page .body .copy-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          opacity: 0;
          transition:
            opacity 0.15s ease,
            background 0.15s ease;
          font-family:
            Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 5px 10px;
          background: rgba(76, 86, 106, 0.6);
          color: #d8dee9;
          border: 1px solid rgba(216, 222, 233, 0.2);
          border-radius: 4px;
          cursor: pointer;
        }
        #article-page .body .code-block:hover .copy-btn,
        #article-page .body .copy-btn:focus-visible {
          opacity: 1;
        }
        #article-page .body .copy-btn:hover {
          background: rgba(94, 129, 172, 0.7);
          border-color: rgba(216, 222, 233, 0.4);
        }
        #article-page .body .copy-btn.copied {
          opacity: 1;
          background: rgba(163, 190, 140, 0.45);
          border-color: rgba(163, 190, 140, 0.7);
        }

        @media (hover: none) {
          #article-page .body .copy-btn {
            opacity: 1;
          }
          #article-page .body .copy-btn:active {
            background: rgba(94, 129, 172, 0.7);
            border-color: rgba(216, 222, 233, 0.4);
          }
        }
        #article-page .body code {
          font-family:
            Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
          font-size: 16px;
          background: rgba(0, 0, 0, 0.05);
          padding: 2px 6px;
        }
        #article-page .body pre code {
          background: transparent;
          padding: 0;
          font-size: 14px;
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
          font-family: 'Raleway', sans-serif;
          font-size: 12px;
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
          font-family: 'Raleway', sans-serif;
          font-size: 12px;
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
          font-family: 'Raleway', sans-serif;
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
        }

        @media (max-width: 780px) {
          #article-page .article {
            padding: 28px 40px 60px;
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
