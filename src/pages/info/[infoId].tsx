import Layout from '../../components/templates/Layout';
import { client } from '../../../libs/client';

const InfoId = ({ siteTitle, info }) => {
  console.log('render dynamic Info page');

  const infoBody = info.body.replace(/(<([^>]+)>)/gi, '');

  return (
    <Layout
      siteTitle={siteTitle}
      pageTitle={info.title}
      pageDescription={`"ここは${info.title} Pageです"`}
      pageKeywords={infoBody}
    >
      <article>
        <header>
          <h1>{info.title}</h1>
          <p>{info.publishedAt}</p>
        </header>
        <div
          className=""
          dangerouslySetInnerHTML={{
            __html: `${info.body}`,
          }}
        />
      </article>
    </Layout>
  );
};

export default InfoId;

export const getStaticPaths = async () => {
  const data: any = await client.get({
    endpoint: 'info',
  });

  const paths = data.contents.map((content) => `/info/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const infoId = context.params.infoId;
  const data = await client.get({ endpoint: 'info', contentId: infoId });

  return {
    props: {
      info: data,
    },
  };
};
