// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const url = process.env.URL || 'https://emexlab.org/';
const baseUrl = process.env.BASE_URL || '/';
const github = 'emexlab/emexlab.github.io'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'emexDE',
  tagline: 'IDE to develop native code iOS apps and tools on unjailbroken iOS',
  //favicon: '/favicon/favicon.ico', Unused, see the headTags at the bottom

  titleDelimiter: '·',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: true,
      siteStorageNamespacing: true,
      fasterByDefault: (process.env.DOCUSAURUS_FASTER ?? 'true') === 'true',
      mdx1CompatDisabledByDefault: true,
    },
  },

  url: url,
  baseUrl: baseUrl,

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
            'https://github.com/' + github + '/tree/main/',
        },
        blog: {
          blogTitle: 'emexDE News',
          blogDescription: 'News about emexDE and its development progress.',
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
        title: 'emexDE',
        logo: {
          alt: 'emexDE Logo',
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
            href: 'https://github.com/emexlab/emexDE',
            position: 'right',
            className: "navbar-icon github",
            'aria-label': 'GitHub',
          },
          {
            href: 'https://discord.gg/Cbeg3gJzC7',
            position: 'right',
            className: "navbar-icon discord",
            'aria-label': 'Discord',
          },
          {
            href: 'https://github.com/sponsors/emexlab',
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
                href: 'https://github.com/emexlab/emexDE',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/Cbeg3gJzC7',
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
                href: 'https://x.com/emexthecat',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Email',
                href: 'mailto:lucavmu@emexlab.org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} emexlab. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['c', 'csharp'],
      },
      metadata: [
        {name: 'keywords', content: 'emexDE, native iOS app development, IDE, jailed, unjailbroken, custom kernel'},
        {name: 'description', content: 'IDE to develop native code iOS apps on unjailbroken iOS it self just via a certificate and a kernel virtualization layer for those apps. '},
        {name: 'apple-mobile-web-app-title', content: 'emexDE Docs'},
      ],
    }),
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        href: baseUrl + 'favicon/favicon-96x96.png',
        sizes: '96x96',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/svg+xml',
        href: baseUrl + 'favicon/favicon.svg',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'shortcut icon',
        href: baseUrl + 'favicon.ico',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: baseUrl + 'favicon/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: baseUrl + 'favicon/site.webmanifest',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'sitemap',
        href: baseUrl + 'sitemap.xml',
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
        name: 'emexlab',
        url: url,
        logo: baseUrl + 'img/icon/org.png',
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
