import { format } from 'date-fns';
import NextLink from 'next/link';

interface HeaderProps {
  readingTime: { text: string };
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  coverImage?: string;
  number?: string;
}

const Header = ({
  title,
  description,
  createdAt,
  readingTime,
  number,
}: HeaderProps) => {
  const dateLabel = (() => {
    try {
      return format(new Date(createdAt), 'MMM dd, yyyy');
    } catch {
      return '';
    }
  })();

  const readLabel = readingTime?.text
    ? readingTime.text.replace(' read', '')
    : '';

  return (
    <>
      <div className="top">
        <div className="top-w">
          <NextLink href="/" className="back">
            Back to home
          </NextLink>
          <div className="crumb">WRITING{number ? ` / № ${number}` : ''}</div>
        </div>
      </div>

      <header className="fm">
        <div className="row-meta">
          <span>{dateLabel}</span>
          <span className="sep" />
          <span>{readLabel} read</span>
        </div>
        <h1>{title}</h1>
        {description && <p className="standfirst">{description}</p>}
      </header>

      <div className="divider">
        <span>Begin</span>
        <span className="line" />
        <span>{readLabel}</span>
      </div>

      <style jsx>{`
        .top {
          border-bottom: 1px solid var(--rule);
          padding: 16px 0;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .top-w {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .top :global(.back) {
          display: inline-flex;
          gap: 10px;
          align-items: center;
          color: var(--ink);
        }
        .top :global(.back::before) {
          content: '←';
          font-family: 'Archivo';
        }
        .crumb {
          color: var(--muted);
        }

        .fm {
          max-width: 920px;
          margin: 0 auto 36px;
          padding: 40px 40px 0;
        }
        .row-meta {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
          margin-bottom: 18px;
        }
        .row-meta .sep {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--muted);
        }
        .row-meta .cat {
          color: var(--accent);
          display: inline-flex;
          gap: 10px;
          align-items: center;
        }
        .row-meta .cat::before {
          content: '';
          width: 20px;
          height: 1px;
          background: var(--accent);
        }

        .fm h1 {
          font-family: var(--title-font), sans-serif;
          font-weight: 600;
          font-size: clamp(40px, 4.6vw, 68px);
          line-height: 0.98;
          letter-spacing: -0.015em;
          margin: 0 0 14px;
          text-wrap: balance;
          color: var(--ink);
        }
        .fm .standfirst {
          font-family: 'Instrument Serif', serif;
          font-weight: 400;
          font-size: 22px;
          line-height: 1.4;
          color: var(--ink-2);
          margin: 0;
          max-width: 62ch;
        }

        .divider {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 24px 0 28px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .divider .line {
          flex: 1;
          height: 1px;
          background: var(--rule);
        }

        @media (max-width: 780px) {
          .top-w {
            padding: 0 24px;
          }
          .fm h1 {
            font-size: 36px;
          }
          .fm .standfirst {
            font-size: 19px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
