export type SiteData = {
  children: JSX.Element | JSX.Element[];
  siteTitle: string;
  pageTitle: string | number | Array<string> | Array<number>;
  pageDescription: string;
  pageKeywords: string;
};