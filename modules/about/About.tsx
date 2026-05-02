import NextLink from 'next/link';
import { FormattedMessage } from 'react-intl';
import { FIRST_NAME, LAST_NAME } from '../../utils/constants';
import AppBar from '../global/AppBar';

const About = () => {
  return (
    <div id="about-page">
      <AppBar
        primaryAction={{
          href: '/',
          label: <FormattedMessage id="appBar.aboutBackToReading" />,
        }}
        secondaryContent={<FormattedMessage id="appBar.section.about" />}
      />

      <section className="hero">
        <div>
          <h1>
            {FIRST_NAME}
            <br />
            Issao
            <br />
            {LAST_NAME}
          </h1>
        </div>
        <div className="portrait">
          <div className="cap">
            <FormattedMessage id="about.hero.caption" />
          </div>
        </div>
      </section>

      <section className="body">
        <aside className="side">
          <div className="b">
            <span className="k">
              <FormattedMessage id="about.side.based.label" />
            </span>
            <span className="v">
              <FormattedMessage id="about.side.based.value" />
            </span>
          </div>
          <div className="b">
            <span className="k">
              <FormattedMessage id="about.side.role.label" />
            </span>
            <span className="v">
              <FormattedMessage id="about.side.role.value" />
            </span>
          </div>
          <div className="b">
            <span className="k">
              <FormattedMessage id="about.side.company.label" />
            </span>
            <span className="v">
              <FormattedMessage id="about.side.company.value" />
            </span>
          </div>
          <div className="b">
            <span className="k">
              <FormattedMessage id="about.side.education.label" />
            </span>
            <span className="v">
              <FormattedMessage id="about.side.education.value" />
            </span>
          </div>
          <div className="b">
            <span className="k">
              <FormattedMessage id="about.side.languages.label" />
            </span>
            <span className="v">
              <FormattedMessage id="about.side.languages.value" />
            </span>
          </div>
          <div className="b">
            <span className="k">
              <FormattedMessage id="about.side.nationality.label" />
            </span>
            <span className="v">
              <FormattedMessage id="about.side.nationality.value" />
            </span>
          </div>
        </aside>

        <div className="prose">
          <p className="lead">
            <FormattedMessage id="about.prose.lead" />
          </p>
          <p>
            <FormattedMessage id="about.prose.bio1" />
          </p>
          <p>
            <FormattedMessage id="about.prose.bio2" />
          </p>

          <h3>
            <FormattedMessage id="about.prose.workTitle" />
          </h3>
          <p>
            <FormattedMessage
              id="about.prose.work"
              values={{
                a: chunks => (
                  <a
                    href="https://www.teceo.co/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {chunks}
                  </a>
                ),
              }}
            />
          </p>

          <h3>
            <FormattedMessage id="about.prose.reachTitle" />
          </h3>
          <p>
            <FormattedMessage id="about.prose.reach" />
          </p>
        </div>

        <aside className="right">
          <h4>
            <FormattedMessage id="about.right.elsewhere" />
          </h4>
          <a
            href="https://www.linkedin.com/in/thiago-yasunaka-389a69155/"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <span>↗</span>
          </a>
          <a
            href="https://github.com/thiagoissao"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <span>↗</span>
          </a>
          <a href="mailto:thiagoyasunaka@hotmail.com">
            <span>Email</span>
            <span>↗</span>
          </a>
        </aside>
      </section>

      <footer className="foot">
        <div className="foot-w">
          <h3>
            <FormattedMessage id="about.foot.title" />
          </h3>
          <NextLink href="/" className="cta">
            <span>
              <FormattedMessage id="about.foot.cta" />
            </span>
            <span>→</span>
          </NextLink>
        </div>
      </footer>

      <style jsx>{`
        #about-page {
          font-family: var(--body-font), sans-serif;
          color: var(--ink);
          background: var(--paper);
          min-height: 100vh;
        }

        .hero {
          max-width: 1360px;
          margin: 0 auto;
          padding: 80px 40px 40px;
          display: grid;
          grid-template-columns: 1.2fr 0.5fr;
          gap: 80px;
          align-items: end;
          border-bottom: 1px solid var(--rule-strong);
        }
        .hero h1 {
          font-family: var(--title-font), sans-serif;
          font-weight: 600;
          font-size: clamp(56px, 7vw, 116px);
          line-height: 0.95;
          letter-spacing: -0.015em;
          margin: 0;
          text-wrap: balance;
          text-transform: uppercase;
        }
        .hero .portrait {
          aspect-ratio: 1;
          background-image: url('/me.webp');
          background-size: cover;
          background-position: center;
          border: 1px solid var(--rule-strong);
          border-radius: 4px;
          position: relative;
        }
        .hero .portrait .cap {
          position: absolute;
          bottom: 12px;
          left: 12px;
          color: var(--paper);
          font-family: var(--body-font), sans-serif;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          background: rgba(20, 20, 20, 0.6);
          padding: 5px 9px;
          border: 1px solid rgba(242, 239, 233, 0.15);
        }

        .body {
          max-width: 1360px;
          margin: 0 auto;
          padding: 60px 40px;
          display: grid;
          grid-template-columns: 200px 1fr 260px;
          gap: 60px;
          align-items: start;
        }
        .body .side {
          font-family: var(--body-font), sans-serif;
          font-size: 12px;
          position: sticky;
          top: 24px;
        }
        .body .side .b {
          padding: 10px 0;
          border-bottom: 1px solid var(--rule);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .body .side .b:first-child {
          border-top: 1px solid var(--rule-strong);
        }
        .body .side .b .k {
          color: var(--muted);
          font-size: 9px;
          display: block;
          margin-bottom: 3px;
        }
        .body .side .b .v {
          color: var(--ink);
          font-size: 12px;
        }

        .body .prose :global(p) {
          font-size: 18px;
          line-height: 1.65;
          margin: 0 0 20px;
        }
        .body .prose :global(p.lead) {
          font-family: var(--body-font), sans-serif;
          font-size: 26px;
          line-height: 1.4;
          color: var(--ink);
          margin-bottom: 28px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--rule);
        }
        .body .prose :global(h3) {
          font-family: var(--title-font), sans-serif;
          font-weight: 600;
          font-size: 28px;
          margin: 40px 0 14px;
          letter-spacing: -0.005em;
          text-transform: uppercase;
        }
        .body .prose :global(a) {
          color: var(--ink);
          border-bottom: 1px solid var(--accent);
        }

        .body .right :global(h4) {
          font-family: var(--title-font), sans-serif;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin: 0 0 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--rule-strong);
        }
        .body .right :global(a) {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px dashed var(--rule);
          font-family: var(--body-font), sans-serif;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .foot {
          background: #141414;
          color: var(--paper);
          padding: 80px 0 60px;
          margin-top: 60px;
        }
        .foot-w {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 60px;
          align-items: end;
        }
        .foot :global(h3) {
          font-family: var(--title-font), sans-serif;
          font-weight: 600;
          font-size: clamp(44px, 6vw, 80px);
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin: 0;
          text-transform: uppercase;
        }
        .foot :global(.cta) {
          font-family: var(--body-font), sans-serif;
          font-size: 13px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          border: 1px solid #3a3a38;
          padding: 14px 20px;
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-top: 20px;
          gap: 20px;
          color: var(--paper);
        }
        .foot :global(.cta:hover) {
          background: var(--paper);
          color: var(--ink);
        }

        @media (max-width: 960px) {
          .hero {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 48px 24px 32px;
            align-items: start;
          }
          .hero .portrait {
            order: -1;
            width: 100%;
            max-width: 320px;
          }
          .body {
            grid-template-columns: 1fr;
            padding: 40px 24px;
            gap: 40px;
          }
          .body .side {
            position: static;
          }
          .foot-w {
            grid-template-columns: 1fr;
            padding: 0 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
