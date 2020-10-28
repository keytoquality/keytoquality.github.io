module.exports = {
  title: 'K2Q Reference Guide',
  tagline: 'The tagline of my site',
  url: 'https://keytoquality.com',
  baseUrl: '/k2q-user-manual/',
  onBrokenLinks: 'throw',
  favicon: 'img/k2qlogosmall.svg',
  organizationName: 'keytoquality', // Usually your GitHub org/user name.
  projectName: 'keytoqualitysite', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Reference Guide',
      logo: {
        alt: 'K2Q',
        src: 'img/k2qlogosmall.svg',
      },
//    items: [
//      {
//        to: "docs/fracas",
//        activeBasePath: "docs/fracas",
//        label: "FRACAS",
//        position: "left"
//      },
//    ]  
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Key to Quality`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/keytoquality/keytoqualitysite',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
