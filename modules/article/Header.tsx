import { format } from 'date-fns';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import { useDateFnsLocale } from '../../lib/i18n';
import AppBar from '../global/AppBar';

interface HeaderProps {
  readingTime: { text: string };
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  coverImage?: string;
  number?: string;
}

const parseMinutes = (text: string | undefined): number => {
  if (!text) return 0;
  const match = text.match(/(\d+)/);
  return match ? Number(match[1]) : 0;
};

const Header = ({
  title,
  description,
  createdAt,
  readingTime,
  coverImage,
  number,
}: HeaderProps) => {
  const dfLocale = useDateFnsLocale();

  const dateLabel = (() => {
    try {
      return format(new Date(createdAt), 'PP', { locale: dfLocale });
    } catch {
      return '';
    }
  })();

  const minutes = parseMinutes(readingTime?.text);

  return (
    <>
      <div className="header-appbar">
        <AppBar
          primaryAction={{
            href: '/',
            label: <FormattedMessage id="appBar.articleBackToHome" />,
          }}
          secondaryContent={
            number ? (
              <FormattedMessage
                id="appBar.section.writingWithNumber"
                values={{ number }}
              />
            ) : (
              <FormattedMessage id="appBar.section.writing" />
            )
          }
        />
      </div>

      <header className="fm">
        <div className="row-meta">
          <span>{dateLabel}</span>
          <span className="sep" />
          <span>
            <FormattedMessage
              id="article.readSuffix"
              values={{ minutes }}
            />
          </span>
        </div>
        <h1>{title}</h1>
        {description && <p className="standfirst">{description}</p>}
        {coverImage && (
          <div className="cover-wrap">
            <Image
              src={coverImage}
              alt={title}
              width={1200}
              height={1200}
              sizes="(max-width: 920px) 100vw, 840px"
              className="cover"
              priority
            />
          </div>
        )}
      </header>

      <div className="divider">
        <span><FormattedMessage id="article.beginLabel" /></span>
        <span className="line" />
        <span>
          <FormattedMessage
            id="article.readSuffix"
            values={{ minutes }}
          />
        </span>
      </div>

      <style jsx>{`
        .header-appbar {
          border-bottom: 1px solid var(--rule);
        }
        .header-appbar :global(.app-bar) {
          border-bottom: 0;
          padding: 16px 0;
        }

        .fm {
          max-width: 920px;
          margin: 0 auto 36px;
          padding: 40px 40px 20px;
        }
        .row-meta {
          font-family: var(--body-font), sans-serif;
          font-size: 12px;
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
          font-family: var(--body-font), sans-serif;
          font-weight: 400;
          font-size: 20px;
          line-height: 1.6;
          color: var(--ink-2);
          margin: 0;
          max-width: 62ch;
        }
        .fm .cover-wrap {
          margin-top: 28px;
          border: 1px solid var(--rule);
          border-radius: 4px;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.04);
        }
        .fm :global(.cover) {
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 1 / 1;
          object-fit: cover;
        }

        .divider {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 24px 0 28px;
          font-family: var(--body-font), sans-serif;
          font-size: 12px;
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
