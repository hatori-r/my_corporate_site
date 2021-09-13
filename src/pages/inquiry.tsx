import Layout from '../components/templates/Layout';

const ContactUs = ({ siteTitle }) => {
  console.log('render Contact Us page');

  return (
    <Layout
      siteTitle={siteTitle}
      pageTitle="Contact Us"
      pageDescription="ここはContact Us Pageです"
      pageKeywords=""
    >
      <h1>Contact Us</h1>
    </Layout>
  );
};

export default ContactUs;
