import { format } from 'date-fns';
import Image from 'next/image';
import NextLink from 'next/link';
import { FormattedMessage } from 'react-intl';
import { FIRST_NAME, LAST_NAME } from '../../utils/constants';
import { IArticle } from '../article/interfaces/article.interface';
import AppBar from '../global/AppBar';

type HomeProps = {
  articles: IArticle[];
};

const formatDate = (iso: string) => {
  try {
    return format(new Date(iso), 'yyyy·MM·dd');
  } catch {
    return '—';
  }
};

const pad = (n: number) => String(n).padStart(3, '0');

const Home = ({ articles }: HomeProps) => {
  const total = articles.length;
  return (
    <div id="tech-index">
      <AppBar
        primaryAction={{
          href: '/',
          label: <FormattedMessage id="appBar.home.label" />,
        }}
        secondaryContent={<FormattedMessage id="appBar.section.reading" />}
      />

      <div className="grid">
        <main>
          <div className="table">
            {articles.map((a, i) => {
              const n = pad(total - i);
              return (
                <NextLink
                  key={a.id}
                  className="tr"
                  href={`/blog/${a.id}`}
                  aria-label={a.title}
                >
                  <div className="td no">{n}</div>
                  <div className="td title">
                    <div className="title-wrap">
                      <Image
                        src={a.coverImage}
                        alt={a.title}
                        className="thumb"
                        width={1000}
                        height={1000}
                        sizes="(max-width: 600px) 100vw, 64px"
                      />
                      <div className="text">
                        <span className="t">{a.title}</span>
                        <span className="e">{a.description}</span>
                      </div>
                    </div>
                  </div>
                  <div className="td date">{formatDate(a.createdAt)}</div>
                </NextLink>
              );
            })}
          </div>
        </main>

        <aside className="right">
          <Image
            src="/me2.webp"
            alt={`${FIRST_NAME} ${LAST_NAME}`}
            width={120}
            height={120}
            className="avatar"
            priority
            sizes="120px"
          />
          <div className="name">
            {FIRST_NAME} · {LAST_NAME}
          </div>
          <NextLink
            href="/about"
            className="more-info"
            aria-label={`About ${FIRST_NAME} ${LAST_NAME}`}
          >
            <span><FormattedMessage id="home.aside.moreInfo" /></span>
          </NextLink>
          <div>
            <h5><FormattedMessage id="home.aside.statusTitle" /></h5>
            <div className="item">
              <span className="k"><FormattedMessage id="home.aside.location.label" /></span>
              <span className="v"><FormattedMessage id="home.aside.location.value" /></span>
            </div>
            <div className="item">
              <span className="k"><FormattedMessage id="home.aside.now.label" /></span>
              <span className="v"><FormattedMessage id="home.aside.now.value" /></span>
            </div>
          </div>
        </aside>
      </div>

      <style jsx>{`
        #tech-index {
          font-family: var(--body-font), sans-serif;
          color: var(--ink);
          background: var(--paper);
          font-size: 13px;
          line-height: 1.55;
          background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.03) 1px,
            transparent 1px
          );
          background-size: 96px 100%;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 220px;
          max-width: 1440px;
          margin: 0 auto;
          min-height: 100vh;
          border-left: 1px solid var(--rule);
          border-right: 1px solid var(--rule);
        }
        .name {
          font-family: var(--title-font), sans-serif;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-size: 13px;
        }
        .right :global(.more-info) {
          color: var(--muted);
          text-decoration: none;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: color 0.2s;
          width: fit-content;
          margin-top: -14px;
        }
        .right :global(.more-info:hover) {
          color: var(--ink);
        }
        .right :global(.more-info span) {
          border-bottom: 1px solid var(--rule);
          padding-bottom: 1px;
        }
        .table {
          display: grid;
          grid-template-columns: 56px 1.2fr 140px;
          font-size: 14px;
        }
        .table :global(.tr) {
          display: contents;
          cursor: pointer;
        }
        .table :global(.td) {
          padding: 16px;
          border-bottom: 1px solid var(--rule);
          transition: background 0.15s;
        }
        .table :global(.tr:hover .td) {
          background: rgba(0, 0, 0, 0.035);
        }
        .table :global(.tr:hover .td.title .t) {
          color: var(--accent);
        }
        .table :global(.td.no) {
          color: var(--muted);
          font-size: 14px;
        }
        .table :global(.td.title .title-wrap) {
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 14px;
          align-items: start;
        }
        .table :global(.td.title .thumb) {
          width: 64px;
          height: 64px;
          border-radius: 4px;
          object-fit: cover;
          border: 1px solid var(--rule);
          background: rgba(0, 0, 0, 0.06);
        }
        .table :global(.td.title .t) {
          font-family: var(--title-font), sans-serif;
          font-weight: 500;
          font-size: 20px;
          letter-spacing: -0.005em;
          display: block;
          margin-bottom: 4px;
          line-height: 1.1;
          color: var(--ink);
          transition: color 0.2s;
        }
        .table :global(.td.title .e) {
          color: var(--muted);
          font-size: 14px;
          letter-spacing: 0;
          text-transform: none;
        }
        .table :global(.td.date) {
          color: var(--ink);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: 12px;
        }

        .right :global(.avatar) {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 4px;
        }
        .right {
          border-left: 1px solid var(--rule);
          padding: 28px 20px;
          display: flex;
          flex-direction: column;
          gap: 28px;
          font-size: 14px;
        }
        .right :global(h5) {
          margin: 0 0 12px;
          font-family: var(--title-font), sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--rule);
        }
        .right :global(.item) {
          padding: 8px 0;
          border-bottom: 1px dashed var(--rule);
          display: flex;
          justify-content: space-between;
          gap: 14px;
        }

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr;
          }
          .right {
            order: -1;
            border: 0;
          }
          .table {
            grid-template-columns: 40px 1fr 90px;
          }
          .table :global(.td.title .title-wrap) {
            grid-template-columns: 52px 1fr;
            gap: 12px;
          }
          .table :global(.td.title .thumb) {
            width: 52px;
            height: 52px;
          }
        }

        @media (max-width: 600px) {
          .table {
            display: block;
          }
          .table :global(.tr) {
            display: grid;
            grid-template-columns: auto 1fr auto;
            grid-template-areas:
              'no . date'
              'title title title'
              'thumb thumb thumb'
              'desc desc desc';
            column-gap: 12px;
            row-gap: 10px;
            padding: 14px 12px;
            border-bottom: 1px solid var(--rule);
          }
          .table :global(.td) {
            padding: 0;
            border-bottom: 0;
          }
          .table :global(.td.no) {
            grid-area: no;
          }
          .table :global(.td.date) {
            grid-area: date;
            text-align: right;
          }
          .table :global(.td.title),
          .table :global(.td.title .title-wrap),
          .table :global(.td.title .text) {
            display: contents;
          }
          .table :global(.td.title .thumb) {
            grid-area: thumb;
            width: 100%;
            height: auto;
            aspect-ratio: 1 / 1;
          }
          .table :global(.td.title .t) {
            grid-area: title;
            font-size: 18px;
          }
          .table :global(.td.title .e) {
            grid-area: desc;
            font-size: 13px;
          }
          .table :global(.tr:hover) {
            background: rgba(0, 0, 0, 0.035);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
