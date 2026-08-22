import { format } from 'date-fns';
import NextLink from 'next/link';
import { IArticle } from '../article/interfaces/article.interface';
import Layout from '../global/Layout';

type HomeProps = {
  articles: IArticle[];
};

const formatDate = (iso: string) => {
  try {
    return format(new Date(iso), 'yyyy.MM.dd');
  } catch {
    return '—';
  }
};

const pad = (n: number) => String(n).padStart(2, '0');

const Home = ({ articles }: HomeProps) => {
  return (
    <Layout>
      <section className="block">
        <div className="list">
          {articles.map((a, i) => (
            <NextLink
              key={a.id}
              className="item rise"
              href={`/blog/${a.id}`}
              aria-label={a.title}
            >
              <span className="n">{pad(i + 1)}</span>
              <div>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
                <span className="d">{formatDate(a.createdAt)}</span>
              </div>
            </NextLink>
          ))}
        </div>
      </section>

      <style jsx>{`
        .block {
          margin: 56px 0 0;
        }
        .list {
          display: flex;
          flex-direction: column;
        }
        .list :global(.item) {
          display: grid;
          grid-template-columns: 34px 1fr;
          gap: 16px;
          padding: 26px 0;
          border-bottom: 1px solid var(--hair);
          color: inherit;
          align-items: start;
        }
        .list :global(.item:hover) {
          text-decoration: none;
        }
        .list :global(.item .n) {
          font-family: var(--mono-font), ui-monospace, monospace;
          font-size: 10.5px;
          color: var(--muted);
          letter-spacing: 0.08em;
          padding-top: 5px;
          transition: color 0.2s;
        }
        .list :global(.item:hover .n) {
          color: var(--accent);
        }
        .list :global(.item h3) {
          font-size: 18px;
          font-weight: 500;
          letter-spacing: -0.012em;
          margin: 0;
          line-height: 1.4;
          transition: color 0.2s;
        }
        .list :global(.item:hover h3) {
          color: var(--accent);
        }
        .list :global(.item p) {
          margin: 7px 0 0;
          color: var(--muted);
          font-size: 14.5px;
          line-height: 1.6;
          text-wrap: pretty;
        }
        .list :global(.item .d) {
          display: block;
          margin-top: 11px;
          font-family: var(--mono-font), ui-monospace, monospace;
          font-size: 10.5px;
          letter-spacing: 0.08em;
          color: var(--muted);
        }

        @media (max-width: 520px) {
          .block {
            margin-top: 40px;
          }
          .list :global(.item) {
            grid-template-columns: 26px 1fr;
            gap: 12px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Home;
