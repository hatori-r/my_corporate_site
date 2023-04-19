import { VFC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';

import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import { SiteData } from '../../../types/siteData';

const Layout: VFC<SiteData> = ({
  children,
  siteTitle = 'hatorilab',
  pageTitle,
  pageDescription,
  pageKeywords,
}) => {
  console.log('render Layout');
  const router = useRouter();
  const sitePath = router.pathname;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=1.0, minimum-scale=1.0, maximum-scale=1.0"
        />
        <title>
          {sitePath === '/' ? siteTitle : `${pageTitle} | ${siteTitle}`}
        </title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <link
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/twitter/282/hatching-chick_1f423.png"
          rel="icon"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header siteTitle={siteTitle} />
      <main
        className={`${sitePath === '/' ? '' : 'pt-16'} min-h-screen font-Inter`}
      >
        {children}
      </main>
      <Footer siteTitle={siteTitle} />
    </>
  );
};

export default Layout;
