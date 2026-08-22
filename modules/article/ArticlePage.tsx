import hljs from 'highlight.js';
import md from 'markdown-it';
import { useEffect, useMemo, useRef } from 'react';
import { useIntl } from 'react-intl';
import { normalizeImageSrc } from '../../utils/images';
import Layout from '../global/Layout';
import Header from './Header';

const escapeAttr = (s: string) =>
  s.replace(
    /[&<>"']/g,
    c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        c
      ] as string
  );

interface ArticlePageProps {
  readingTime: { text: string };
  title: string;
  createdAt: string;
  content: string;
  coverImage: string;
}

const ArticlePage = ({
  readingTime,
  title,
  createdAt,
  content,
  coverImage,
}: ArticlePageProps) => {
  const intl = useIntl();

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

    const defaultImage = instance.renderer.rules.image!;
    instance.renderer.rules.image = (tokens, idx, opts, env, self) => {
      const token = tokens[idx];
      const srcIndex = token.attrIndex('src');
      if (srcIndex >= 0 && token.attrs) {
        token.attrs[srcIndex][1] = normalizeImageSrc(token.attrs[srcIndex][1]);
      }
      return defaultImage(tokens, idx, opts, env, self);
    };

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
    <Layout>
      <article className="article">
        <Header
          readingTime={readingTime}
          title={title}
          createdAt={createdAt}
          coverImage={coverImage}
        />

        <div
          ref={bodyRef}
          className="prose rise"
          dangerouslySetInnerHTML={{ __html: markdown.render(content) }}
        />
      </article>

      {/* markdown-only rules — the shared prose typography lives in globals.css */}
      <style jsx global>{`
        .prose img {
          display: block;
          width: 100%;
          height: auto;
          margin: 36px 0;
        }
        .prose .code-block {
          position: relative;
        }
        .prose pre,
        .prose pre.highlight-tab-tab {
          background: #2e3440;
          color: #d8dee9;
          padding: 16px;
          font-family: var(--mono-font), ui-monospace, monospace;
          font-size: 13px;
          line-height: 1.6;
          margin: 32px 0;
          overflow: auto;
          border-radius: 6px;
        }
        .prose .code-block pre,
        .prose .code-block pre.highlight-tab-tab {
          margin: 0;
        }
        .prose pre code {
          color: inherit;
          font-size: 13px;
        }
        .prose .copy-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          opacity: 0;
          transition:
            opacity 0.15s ease,
            background 0.15s ease;
          font-family: var(--mono-font), ui-monospace, monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 10px;
          background: rgba(76, 86, 106, 0.6);
          color: #d8dee9;
          border: 1px solid rgba(216, 222, 233, 0.2);
          border-radius: 999px;
          cursor: pointer;
        }
        .prose .code-block:hover .copy-btn,
        .prose .copy-btn:focus-visible {
          opacity: 1;
        }
        .prose .copy-btn:hover {
          background: rgba(94, 129, 172, 0.7);
          border-color: rgba(216, 222, 233, 0.4);
        }
        .prose .copy-btn.copied {
          opacity: 1;
          background: rgba(163, 190, 140, 0.45);
          border-color: rgba(163, 190, 140, 0.7);
        }

        @media (hover: none) {
          .prose .copy-btn {
            opacity: 1;
          }
          .prose .copy-btn:active {
            background: rgba(94, 129, 172, 0.7);
            border-color: rgba(216, 222, 233, 0.4);
          }
        }
        .prose table {
          border-collapse: collapse;
          width: 100%;
          margin: 32px 0;
          font-size: 14.5px;
        }
        .prose th,
        .prose td {
          padding: 10px 12px;
          text-align: left;
          border-bottom: 1px solid var(--hair);
        }
        .prose th {
          font-family: var(--mono-font), ui-monospace, monospace;
          font-size: 10.5px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 400;
          border-bottom-color: var(--faint);
        }
      `}</style>
    </Layout>
  );
};

export default ArticlePage;
