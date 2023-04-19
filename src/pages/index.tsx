import { VFC } from 'react';
import { GetStaticProps } from 'next';
import { client } from '../../libs/client';

import MainVisual from '../components/organisms/MainVisual';
import Layout from '../components/templates/Layout';
import NewsArea from '../components/organisms/NewsList';

import { News } from '../../types/news';

type Props = {
  siteTitle: string;
  pageTitle: string;
  description: string;
  keywords: string;
  favicon: string;
  info: Array<string> | Array<number>;
};

const Home: VFC<Props> = ({
  siteTitle,
  pageTitle,
  description,
  keywords,
  info,
}) => {
  console.log('render Index page');

  return (
    <>
      <Layout
        siteTitle={siteTitle}
        pageTitle={pageTitle}
        pageDescription={description}
        pageKeywords={keywords}
      >
        <MainVisual />
        <NewsArea info={info} />
        <section>
          {/* <h2>行動者にキッカケを</h2> */}
          <h2>Information</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi
            modi molestiae sunt. Velit iure in commodi dolore ipsa rerum
            suscipit, cum iusto nostrum sit voluptate excepturi incidunt autem
            cupiditate?
          </p>
        </section>
        <section>
          <h2>Service</h2>
          <ul>
            <li>
              <h3>Service1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                enim non. Ipsam explicabo minima quia a hic delectus quaerat
                velit qui, vel, eveniet quasi voluptate, voluptatum assumenda
                dolorum tempora nam!
              </p>
            </li>
            <li>
              <h3>Service2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
                harum, voluptate exercitationem velit dolore adipisci error
                tempore aliquam pariatur dignissimos suscipit non dolor maxime!
                Eos quis illo molestiae esse iusto?
              </p>
            </li>
            <li>
              <h3>Service3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium consequuntur quibusdam quo nesciunt blanditiis
                accusantium dolore suscipit repellat in aperiam! Odio
                consequuntur in magni dolor expedita. Sequi numquam eum
                repellendus?
              </p>
            </li>
          </ul>
        </section>
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import(`../../siteconfig.json`);
  const data: News = await client.get({ endpoint: 'info' });

  return {
    props: {
      siteTitle: configData.default.siteTitle,
      pageTitle: configData.default.pageTitle,
      description: configData.default.description,
      keywords: configData.default.keywords.map((word) => word),
      favicon: configData.default.favicon,
      info: data.contents,
    },
  };
};
