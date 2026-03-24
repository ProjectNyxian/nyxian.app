// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nyxian',
  tagline: 'IDE to develop native code iOS apps and tools on unjailbroken iOS',
  //favicon: '/favicon/favicon.ico', Unused, see the headTags at the bottom

  titleDelimiter: '·',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://nyxian.app/',
  baseUrl: '/',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  /*i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      de: {
        baseUrl: '/de',
        htmlLang: 'de',
      },
    },
  },*/

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/ProjectNyxian/nyxian.app/tree/main/',
        },
        blog: {
          blogTitle: 'Nyxian News',
          blogDescription: 'News about Nyxian and it's development progress.',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Nyxian',
        logo: {
          alt: 'Nyxian Logo',
          src: 'img/icon/light.png',
          srcDark: 'img/icon/dark.png',
          className: 'rounded',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/blog',
            label: 'News',
            position: 'left'
          },
          /*{
            type: 'localeDropdown',
            position: 'right',
            queryString: '?persistLocale=true',
          },*/
          {
            href: 'https://github.com/ProjectNyxian/Nyxian',
            position: 'right',
            className: "navbar-icon github",
            'aria-label': 'GitHub',
          },
          {
            href: 'https://discord.gg/VEMvDMJ8KB',
            position: 'right',
            className: "navbar-icon discord",
            'aria-label': 'Discord',
          },
          {
            href: 'https://github.com/sponsors/ProjectNyxian',
            position: 'right',
            className: "navbar-icon sponsor",
            'aria-label': 'Sponsor',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Installation',
                to: '/docs/installation',
              },
              {
                label: 'Credits',
                to: '/docs/credits',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ProjectNyxian/Nyxian',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/VEMvDMJ8KB',
              },
            ],
          },
          {
            title: 'News',
            items: [
              {
                label: 'Blogs',
                to: '/blog',
              },
              {
                label: 'X (formerly Twitter)',
                href: 'https://x.com/nyxengineer',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Email',
                href: 'mailto:ceo@nyxian.app',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ProjectNyxian. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['c'],
      },
      metadata: [
        {name: 'keywords', content: 'Nyxian, native iOS app development, IDE, jailed, unjailbroken, custom kernel'},
        {name: 'description', content: 'IDE to develop native code iOS apps on unjailbroken iOS it self just via a certificate and a kernel virtualization layer for those apps. '},
        {name: 'apple-mobile-web-app-title', content: 'Nyxian Docs'},
      ],
    }),
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon/favicon-96x96.png',
        sizes: '96x96',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon/favicon.svg',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'shortcut icon',
        href: '/favicon/favicon.ico',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/favicon/site.webmanifest',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Organization',
        name: 'ProjectNyxian',
        url: 'https://nyxian.app/',
        logo: 'https://nyxian.app/img/icon/hd/light.png',
      }),
    },
  ],
  plugins: [require.resolve('docusaurus-lunr-search')],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
