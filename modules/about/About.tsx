import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import {
  COMPANY_URL,
  FIRST_NAME,
  LAST_NAME,
} from '../../utils/constants';
import Layout from '../global/Layout';

const About = () => {
  return (
    <Layout>
      <article className="article">
        <header className="rise">
          <div className="avatar">
            <Image
              src="/me2.webp"
              alt={`${FIRST_NAME} ${LAST_NAME}`}
              width={112}
              height={112}
              priority
            />
          </div>
          <h1>
            <FormattedMessage id="about.hero.title" />
          </h1>
        </header>

        <div className="prose rise">
          <p>
            <FormattedMessage id="about.prose.lead" />
          </p>
          <p>
            <FormattedMessage id="about.prose.bio1" />
          </p>
          <p>
            <FormattedMessage
              id="about.prose.work"
              values={{
                a: chunks => (
                  <a href={COMPANY_URL} target="_blank" rel="noreferrer">
                    {chunks}
                  </a>
                ),
              }}
            />
          </p>

          <h2>
            <FormattedMessage id="about.prose.hereTitle" />
          </h2>
          <p>
            <FormattedMessage id="about.prose.here" />
          </p>
        </div>
      </article>
    </Layout>
  );
};

export default About;
