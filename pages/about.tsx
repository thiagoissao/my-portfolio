import About from '../modules/about/About';
import Template from '../modules/global/Template';
import { FIRST_NAME, LAST_NAME } from '../utils/constants';

const AboutPage = () => {
  return (
    <Template
      title={`${FIRST_NAME} ${LAST_NAME}`}
      ogProperty={{
        title: `${FIRST_NAME} ${LAST_NAME}`,
        description: `About ${FIRST_NAME} ${LAST_NAME} — software engineer`,
      }}
    >
      <About />
    </Template>
  );
};

export default AboutPage;
