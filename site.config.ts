import { siteConfig } from './lib/site-config';

export default siteConfig({
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'f6f85c1f4880434d868f7cd43bd08c33',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'Lambd4',

  // basic site info (required)åå
  name: 'hm_dev',
  domain: 'hmdev.vercel.app',
  author: 'hanmil lee',

  description: "Hanmil's Notion blog",
  // socialImageTitle: 'HM_dev',
  // socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'hanmilLee',
  linkedin: 'hanmil-lee-828a57187',
  instagram: '2hanmil',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F40aa26a4-f6eb-48ab-b565-42285e4ca6e9%2FIMG_0742_2.jpg?table=block&id=f6f85c1f-4880-434d-868f-7cd43bd08c33&spaceId=623e70e4-669c-4ea1-b8a9-ab61e0e56b03&width=250&userId=cc3b84ef-8151-41fa-bfd0-1b4fef12b8c3&cache=v2',
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
      pageId: 'a32a59aec23c41e08452757e94d96418',
    },
    // {
    //   title: 'Category',
    //   pageId: 'd80818b72861426fad44a74b1c37d041',
    // },
  ],

  // -------- custom configs (2skydev) -------------

  // // Utteranc.es comments via GitHub issue comments (optional)
  // utterancesGitHubRepo: 'hanmilLee/nextjs-notion-starter-kit',

  GiscusGitHubRepo: `hanmilLee/Notion-Next.js-blog-starter-kit`,

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
