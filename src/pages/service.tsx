import Layout from '../components/templates/Layout';

const Service = ({ siteTitle }) => {
  console.log('render Service page');

  return (
    <Layout
      siteTitle={siteTitle}
      pageTitle="Service"
      pageDescription="ここはService Pageです"
      pageKeywords=""
    >
      <h1>Service</h1>
    </Layout>
  );
};

export default Service;
