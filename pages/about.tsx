import About from '../modules/about/About';
import Template from '../modules/global/Template';

const AboutPage = () => {
  return (
    <Template
      title="Thiago Yasunaka"
      ogProperty={{
        title: 'Thiago Yasunaka',
        description: 'About Thiago Yasunaka — software engineer',
      }}
    >
      <About />
    </Template>
  );
};

export default AboutPage;
