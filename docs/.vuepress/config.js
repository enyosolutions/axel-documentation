const { description } = require('../../package')

module.exports = {
  title: "Axel Framework",
  description: "Documentation for the axel framework",
  base: '/axel-documentation/',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: 'orange' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: "/assets/img/rocket.svg",
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    nextLinks: true,
    lastUpdated: false,
    smoothScroll: true,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/guide/axel-framework/'
      },
      {
        text: 'Why',
        link: '/why/',
      },
      {
        text: 'Axel cli',
        link: '/guide/axel-cli/',
      }
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        path: "/guide/readme.md",
        children: [
          {
            title: "Axel cli",
            path: "/guide/axel-cli/"
          },
          {
            title: 'Axel framework',
            collapsable: false,
            path: '/guide/axel-framework',
            children: [
              {
                title: "Intro",
                path: "/guide/axel-framework/"
              },
              {
                title: "Directory structure",
                path: "/guide/axel-framework/structure.md"
              },
              {
                title: "Routing",
                path: "/guide/axel-framework/routing.md"
              },
              {
                title: "Models",
                path: "/guide/axel-framework/models.md"
              },
              {
                title: "Schemas",
                path: "/guide/axel-framework/schema.md"
              },
            ]
          }
        ]
      },

    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
