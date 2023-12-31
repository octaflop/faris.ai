module.exports = {
  url: process.env.URL || 'https://faris.ai',
  siteName: 'faris.ai',
  siteDescription:
    "A place to spotlight attempts into faris's foray into the world of 'AI'.",
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Faris Chebib',
  authorEmail: 'faris+ai@theluckybead.com',
  authorWebsite: 'https://farischebib.is',
  themeColor: '#9644dd', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    opengraph_default_alt:
      'Tokyo tower surrounded by flowers', // alt text for default meta image
    twitterCreator: '@siraf', // i.e. @author -  twitter profile of the site
    mastodonProfile: 'https://mastodon.online/@foenix' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'faris.ai',
    description:
      'A place to spotlight attempts into faris\'s foray into the world of \'AI\''
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Lucky Bead LLC',
    street: '',
    city: 'Salt Lake City',
    state: 'UT',
    zip: '',
    mobileDisplay: '',
    mobileCall: ' ',
    email: 'faris+ai@theluckybead.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
