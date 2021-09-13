import Link from 'next/link';

import Layout from '../components/templates/Layout';

const Page404 = ({ siteTitle }) => {
  console.log('render 404 page');

  return (
    <Layout
      siteTitle={siteTitle}
      pageTitle="ページが見つかりません"
      pageDescription="ここは404 Pageです"
      pageKeywords=""
    >
      <h1>404</h1>
      <p>お探しのページは見つかりませんでした。</p>
      <h3>お困りですか？</h3>
      <div className="flex text-blue-600">
        <Link href="/">
          <a>TOPページへ</a>
        </Link>
        <span className="mx-2">|</span>
        <Link href="/inquiry">
          <a>お問い合わせ</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Page404;
