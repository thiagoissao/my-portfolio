import { format } from 'date-fns';
import NextLink from 'next/link';
import { IArticle } from '../article/interfaces/article.interface';

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

const estimateReadMinutes = (description: string) => {
  const words = (description || '').split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(3, Math.round(words / 180) + 3);
  return `${minutes} min`;
};

const pad = (n: number) => String(n).padStart(3, '0');

const Home = ({ articles }: HomeProps) => {
  const total = articles.length;
  return (
    <div id="tech-index">
      <div className="grid">
        <main>
          <div className="table">
            <div className="th">#</div>
            <div className="th">Title</div>
            <div className="th">Date</div>
            <div className="th readH" style={{ textAlign: 'right' }}>
              Read
            </div>
            {articles.map((a, i) => {
              const n = pad(total - i);
              return (
                <NextLink key={a.id} className="tr" href={`/blog/${a.id}`}>
                  <div className="td no">{n}</div>
                  <div className="td title">
                    <span className="t">{a.title}</span>
                    <span className="e">{a.description}</span>
                  </div>
                  <div className="td date">{formatDate(a.createdAt)}</div>
                  <div className="td read">
                    {a.timeReading?.text
                      ? a.timeReading.text.replace(' read', '')
                      : estimateReadMinutes(a.description)}
                  </div>
                </NextLink>
              );
            })}
          </div>
        </main>

        <aside className="right">
          <div className="name">THIAGO · YASUNAKA</div>
          <NextLink href="/about" className="more-info">
            <span>More Info</span>
          </NextLink>
          <div>
            <h5>Status</h5>
            <div className="item">
              <span className="k">Location</span>
              <span className="v">Paraná, BR</span>
            </div>
            <div className="item">
              <span className="k">Now</span>
              <span className="v">Software Engineer</span>
            </div>
          </div>
        </aside>
      </div>

      <style jsx>{`
        #tech-index {
          font-family: 'IBM Plex Mono', monospace;
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
          font-family: 'Archivo Narrow', sans-serif;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-size: 13px;
        }
        .right :global(.more-info) {
          color: var(--muted);
          text-decoration: none;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: color 0.2s;
          width: fit-content;
          margin-top: -12px;
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
          grid-template-columns: 56px 1.2fr 140px 90px;
          font-size: 12px;
        }
        .table .th {
          padding: 12px 16px;
          border-bottom: 1px solid var(--rule-strong);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          background: #f7f5f1;
          position: sticky;
          top: 0;
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
          font-size: 11px;
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
          font-size: 11px;
          letter-spacing: 0;
          text-transform: none;
        }
        .table :global(.td.date) {
          color: var(--ink);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: 10px;
        }
        .table :global(.td.read) {
          color: var(--muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: 10px;
          text-align: right;
        }

        .right {
          border-left: 1px solid var(--rule);
          padding: 28px 20px;
          display: flex;
          flex-direction: column;
          gap: 28px;
          font-size: 11px;
        }
        .right :global(h5) {
          margin: 0 0 10px;
          font-family: 'Archivo Narrow', sans-serif;
          font-weight: 700;
          font-size: 11px;
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
          gap: 12px;
        }

        @media (max-width: 1080px) {
          .grid {
            grid-template-columns: 1fr;
          }
          .right {
            border: 0;
            border-bottom: 1px solid var(--rule-strong);
          }
          .table {
            grid-template-columns: 40px 1fr 90px;
          }
          .table .th.readH,
          .table :global(.td.read) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
