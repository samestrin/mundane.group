const package = require('../../package.json');

module.exports = {
  pkv: package.version || 'v1',
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Mundane.Group',
  siteDescription: 'The Mundane Group develops and manages content websites.',
  siteType: 'Business', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to Content',
  author: 'Mundane.Group', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: 'info@mundane.group', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: 'https://mundane.group', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#AFFC41', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg',
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'The Mundane.Group Blog',
    description: 'Covering the latest Mundane.Group related news.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Mundane.Group',
    street: '123 Main St.',
    city: 'City',
    state: 'State',
    zip: '12345',
    mobileDisplay: '+1 123-456-7890',
    mobileCall: ' +1 123-456-7890',
    email: 'info@mundane.group',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
