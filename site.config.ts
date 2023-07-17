import { siteConfig } from './lib/site-config';

export default siteConfig({
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '257c4973f6454caf9a5d8a30fb3c0567',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)åå
  name: 'YuSeok',
  domain: 'Yuseok.vercel.app',
  author: 'YuSeok',

  description: "Yuseok's Notion blog",
  // socialImageTitle: 'HM_dev',
  // socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'jeong5575',
  //linkedin: 'hanmil-lee-828a57187',
  instagram: 'jeong.u.seok_',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About me',
      pageId: '6a1442382dcf4f3fac44dd19faa7a630',
    },
    // {
    //   title: 'Category',
    //   pageId: 'd80818b72861426fad44a74b1c37d041',
    // },
  ],

  // -------- custom configs (2skydev) -------------

  // // Utteranc.es comments via GitHub issue comments (optional)
  // utterancesGitHubRepo: 'hanmilLee/nextjs-notion-starter-kit',

  GiscusGitHubRepo: `jeong5575/blog-comments`,

  // date-fns format string
  dateformat: 'yyyy년 MM월 dd일',

  // post page - hidden properties
  hiddenPostProperties: ['상태', '최하위 정렬'],

  // contentPosition (table of contents) text align
  contentPositionTextAlign: 'left',

  // default theme color
  defaultTheme: 'system',

  // enable comment
  enableComment: false,
});
