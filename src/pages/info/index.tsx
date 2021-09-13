import Link from 'next/link';
import { GetStaticProps } from 'next';
import { client } from '../../../libs/client';

import Layout from '../../components/templates/Layout';
import { News } from '../../../types/news';

const Info = ({ siteTitle, info }) => {
  console.log('render Info page');

  return (
    <Layout
      siteTitle={siteTitle}
      pageTitle="Info"
      pageDescription="ここはInfo Pageです"
      pageKeywords=""
    >
      <h1>Info</h1>
      <section>
        {info.map((info) => (
          <article key={info.id}>
            <header>
              <h1>
                <Link href={`/info/${info.id}`}>
                  <a>{info.title}</a>
                </Link>
              </h1>
              <p>{info.publishedAt}</p>
            </header>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export default Info;

export const getStaticProps: GetStaticProps = async () => {
  const data: News = await client.get({ endpoint: 'info' });

  return {
    props: {
      info: data.contents,
    },
  };
};
