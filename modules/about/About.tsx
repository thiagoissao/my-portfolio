import NextLink from 'next/link';

const About = () => {
  return (
    <div id="about-page">
      <div className="top">
        <div className="top-w">
          <NextLink href="/">← Back to Reading</NextLink>
          <div style={{ color: 'var(--muted)' }}>ABOUT</div>
        </div>
      </div>

      <section className="hero">
        <div>
          <h1>
            Thiago
            <br />
            Issao
            <br />
            Yasunaka.
          </h1>
        </div>
        <div className="portrait">
          <div className="cap">Brazil · 2026</div>
        </div>
      </section>

      <section className="body">
        <aside className="side">
          <div className="b">
            <span className="k">Based</span>
            <span className="v">Paraná, BR</span>
          </div>
          <div className="b">
            <span className="k">Role</span>
            <span className="v">Software Engineer</span>
          </div>
          <div className="b">
            <span className="k">Company</span>
            <span className="v">teceo</span>
          </div>
          <div className="b">
            <span className="k">Education</span>
            <span className="v">B.Sc. UEM</span>
          </div>
          <div className="b">
            <span className="k">Languages</span>
            <span className="v">PT · EN</span>
          </div>
          <div className="b">
            <span className="k">Nationality</span>
            <span className="v">Brazilian</span>
          </div>
        </aside>

        <div className="prose">
          <p className="lead">
            I’m a software engineer from Brazil — building product software by
            day and writing about software and sports.
          </p>
          <p>
            Computer Scientist from Universidade Estadual de Maringá. I&rsquo;ve
            spent the last years shipping web products — mostly with NodeJS,
            PostgreSQL, React, Redis, RabbitMQ, and now MCP Protocol.
          </p>
          <p>
            When I&rsquo;m not working I&rsquo;m usually running, playing
            soccer, or reading something about architecture, biographies, or AI.
            This site collects the writing that comes out of all of that.
          </p>

          <h3>What I work on</h3>
          <p>
            Currently at{' '}
            <a href="https://www.teceo.co/" target="_blank" rel="noreferrer">
              teceo
            </a>
            , leading technical initiatives as a tech lead — driving high-impact
            product deliveries and shaping software and database architectures
            that continuously evolve the product, its scalability, and
            reliability.
          </p>

          <h3>How to reach me</h3>
          <p>Linkedin is best for anything substantial.</p>
        </div>

        <aside className="right">
          <h4>Elsewhere</h4>
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
          <h3>Go read something</h3>
          <NextLink href="/" className="cta">
            <span>Back to home</span>
            <span>→</span>
          </NextLink>
        </div>
      </footer>

      <style jsx>{`
        #about-page {
          font-family: 'Archivo', sans-serif;
          color: var(--ink);
          background: var(--paper);
          min-height: 100vh;
        }
        .top {
          border-bottom: 1px solid var(--rule-strong);
          padding: 18px 0;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .top-w {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .top :global(a) {
          color: var(--ink);
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
          background-image: url('/me.png');
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
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
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
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
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
          font-size: 11px;
        }

        .body .prose :global(p) {
          font-size: 18px;
          line-height: 1.65;
          margin: 0 0 20px;
        }
        .body .prose :global(p.lead) {
          font-family: 'Instrument Serif', serif;
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
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
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
          line-height: 1;
          letter-spacing: -0.01em;
          margin: 0;
          text-transform: uppercase;
        }
        .foot :global(.cta) {
          font-family: 'IBM Plex Mono', monospace;
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
            grid-template-columns: 1fr 0.5fr;
            gap: 30px;
            padding: 48px 24px 32px;
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
          .top-w {
            padding: 0 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
