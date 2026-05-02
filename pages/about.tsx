import { useIntl } from 'react-intl';
import About from '../modules/about/About';
import Template from '../modules/global/Template';
import { FIRST_NAME, LAST_NAME } from '../utils/constants';

const AboutPage = () => {
  const intl = useIntl();
  const fullName = `${FIRST_NAME} ${LAST_NAME}`;
  return (
    <Template
      title={fullName}
      ogProperty={{
        title: fullName,
        description: intl.formatMessage(
          { id: 'meta.about.description' },
          { first: FIRST_NAME, last: LAST_NAME },
        ),
      }}
    >
      <About />
    </Template>
  );
};

export default AboutPage;
