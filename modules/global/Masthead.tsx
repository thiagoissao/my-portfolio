import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  FIRST_NAME,
  LAST_NAME,
  THEME_STORAGE_KEY,
} from '../../utils/constants';

const toggleTheme = () => {
  const isDark =
    document.documentElement.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch (e) {}
};

const Masthead = () => {
  const { pathname } = useRouter();
  const intl = useIntl();
  const isHome = pathname === '/';
  const isAbout = pathname === '/about';

  return (
    <header className="mast">
      <NextLink className="name" href="/">
        {FIRST_NAME} {LAST_NAME}
        <span>
          <FormattedMessage id="masthead.location" />
        </span>
      </NextLink>
      <nav className="nav">
        <NextLink href="/" aria-current={isHome ? 'page' : undefined}>
          <FormattedMessage id="nav.writings" />
        </NextLink>
        <NextLink href="/about" aria-current={isAbout ? 'page' : undefined}>
          <FormattedMessage id="nav.about" />
        </NextLink>
        <button
          className="theme"
          type="button"
          onClick={toggleTheme}
          aria-label={intl.formatMessage({ id: 'masthead.themeToggle' })}
        />
      </nav>

      <style jsx>{`
        .mast {
          padding: 56px 0 0;
          text-align: center;
        }
        .mast :global(.name) {
          display: inline-block;
          font-weight: 500;
          font-size: 14px;
          letter-spacing: 0.01em;
          color: var(--ink);
        }
        .mast :global(.name:hover) {
          color: var(--accent);
          text-decoration: none;
        }
        .mast :global(.name span) {
          display: block;
          font-family: var(--mono-font), ui-monospace, monospace;
          font-size: 10px;
          letter-spacing: 0.16em;
          color: var(--muted);
          font-weight: 400;
          margin-top: 3px;
        }
        .nav {
          display: flex;
          gap: 24px;
          justify-content: center;
          margin-top: 26px;
        }
        .nav :global(a) {
          font-size: 13.5px;
          color: var(--muted);
          padding-bottom: 3px;
          border-bottom: 1px solid transparent;
        }
        .nav :global(a:hover),
        .nav :global(a[aria-current]) {
          color: var(--ink);
          text-decoration: none;
          border-bottom-color: var(--ink);
        }

        .theme {
          width: 13px;
          height: 13px;
          padding: 0;
          border: 1px solid var(--muted);
          border-radius: 50%;
          background: linear-gradient(
            to right,
            var(--muted) 0 50%,
            transparent 50% 100%
          );
          cursor: pointer;
          align-self: center;
          transition:
            border-color 0.2s,
            background 0.2s;
        }
        .theme:hover {
          border-color: var(--ink);
          background: linear-gradient(
            to right,
            var(--ink) 0 50%,
            transparent 50% 100%
          );
        }
        :global(html[data-theme='dark']) .theme {
          transform: rotate(180deg);
        }

        @media (max-width: 520px) {
          .mast {
            padding-top: 40px;
          }
        }
      `}</style>
    </header>
  );
};

export default Masthead;
