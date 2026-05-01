import NextLink from 'next/link';
import * as React from 'react';

interface AppBarProps {
  primaryAction?: {
    href: string;
    label: React.ReactNode;
  };
  secondaryContent?: React.ReactNode;
}

const AppBar = ({ primaryAction, secondaryContent }: AppBarProps) => {
  return (
    <div className="app-bar">
      <div className="app-bar-w">
        <div className="left">
          {primaryAction ? (
            <NextLink href={primaryAction.href}>{primaryAction.label}</NextLink>
          ) : null}
        </div>
        <div className="right">{secondaryContent}</div>
      </div>

      <style jsx>{`
        .app-bar {
          border-bottom: 1px solid var(--rule-strong);
          padding: 18px 0;
          font-family: 'Raleway', sans-serif;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .app-bar-w {
          max-width: var(--app-bar-max-width);
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }
        .left,
        .right {
          min-width: 0;
        }
        .right {
          color: var(--muted);
        }
        .app-bar :global(a) {
          color: var(--ink);
        }

        @media (max-width: 960px) {
          .app-bar-w {
            padding: 0 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default AppBar;
