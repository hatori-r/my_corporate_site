import Layout from '../components/templates/Layout';

const About = ({ siteTitle }) => {
  console.log('render About page');

  return (
    <Layout
      siteTitle={siteTitle}
      pageTitle="About"
      pageDescription="ここはAbout Pageです"
      pageKeywords=""
    >
      <h1>About</h1>
    </Layout>
  );
};

export default About;
