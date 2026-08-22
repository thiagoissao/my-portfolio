import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../../utils/constants';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <span className="colophon">© {year}</span>
      <div className="flinks">
        <a href={`mailto:${EMAIL}`}>E-mail</a>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>

      <style jsx>{`
        footer {
          margin-top: 96px;
          padding: 26px 0 72px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          font-size: 13px;
          color: var(--muted);
        }
        footer a {
          color: var(--muted);
          font-size: 13px;
        }
        footer a:hover {
          color: var(--accent);
        }
        .flinks {
          display: flex;
          gap: 18px;
        }
        .colophon {
          font-family: var(--mono-font), ui-monospace, monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
