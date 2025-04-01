import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { socialSharePlugin } from 'vuepress-plugin-social-share';
import { sitemapPlugin } from '@vuepress/plugin-sitemap';
import tailwindcss from '@tailwindcss/vite';
import theme from "./theme.js";

export default defineUserConfig({

  pagePatterns: [
    '**/*.md',
    '!**/secret/**', 
    '!**/secret/**/**', // 排除隐藏目录
  ],
  head: [
    // 添加网站地图链接
    ['link', { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' }],
    
    // 添加规范链接
    ['link', { rel: 'canonical', href: 'https://cerozero.cc' }],
    
    // 添加移动设备优化
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    
    // 添加网站描述
    ['meta', { name: 'description', content: '「从零构建 - 向极拓展」- Cero Tech 官方网站，提供网站开发、电子菜单、西班牙语翻译等服务' }],
    
    // 添加关键词
    ['meta', { name: 'keywords', content: '技术服务,网站开发,电子菜单,西班牙语翻译,买房贷款咨询' }],
    
    // 添加作者信息
    ['meta', { name: 'author', content: 'Cero Tech' }],
    
    // 添加社交媒体元标签
    ['meta', { property: 'og:title', content: 'Cero Tech' }],
    ['meta', { property: 'og:description', content: '「从零构建 - 向极拓展」- Cero Tech 官方网站' }],
    ['meta', { property: 'og:url', content: 'https://cerozero.cc' }],
    ['meta', { property: 'og:image', content: 'https://cerozero.cc/logo.jpg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    
    // 添加Twitter卡片
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@cerotech' }],

    // 插入 Google AdSense 脚本
    [
      "script",
      {
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2072750546202515",
        crossorigin: "anonymous",
      },
    ],
  ],
  plugins: [
    tailwindcss(),
    sitemapPlugin({
      hostname: 'https://cerozero.cc',
      // 可选：排除不需要的页面
      excludePaths: ['/404.html', '/private/'],
    }),
    socialSharePlugin({
      networks: [
        // enable build-in networks by default
        'twitter',
        'telegram',
        'whatsapp',
        'wechat',
        // mark user defined networks as default
        'linkedin',
        // add user defined networks
  
        {
          name: 'linkedin',
          sharer:
            'https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description',
          type: 'popup',
          color: '#1786b1',
          icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M910.336 0H113.664A114.005333 114.005333 0 0 0 0 113.664v796.672A114.005333 114.005333 0 0 0 113.664 1024h796.672A114.005333 114.005333 0 0 0 1024 910.336V113.664A114.005333 114.005333 0 0 0 910.336 0zM352.256 796.330667H207.189333V375.466667h145.066667z m-72.021333-477.866667a77.824 77.824 0 0 1-81.237334-74.069333A77.824 77.824 0 0 1 280.234667 170.666667a77.824 77.824 0 0 1 81.237333 73.728 77.824 77.824 0 0 1-81.237333 73.386666z m582.314666 477.866667H716.8v-227.669334c0-46.762667-18.432-93.525333-73.045333-93.525333a84.992 84.992 0 0 0-81.237334 94.549333v226.304h-140.629333V375.466667h141.653333v60.757333a155.989333 155.989333 0 0 1 136.533334-71.338667c60.416 0 163.498667 30.378667 163.498666 194.901334z" /></svg>',
        },

        {
          name: 'twitter',
          color: {
            light: '#1786b1',
            dark: '#ff0',
          },
        },
      ],
      twitterUser: 'ntnyq',
      fallbackImage: '/social-share.png',
      autoQuote: true,
      isPlain: true,
      qrcodeOptions: {
        width: 240,
      },
    }),
    googleAnalyticsPlugin({
      // 配置项
      id: 'G-G63MSQ1CCE',
    })
  ],
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Cero Tech"
      //  description: "「从零构建」- 「向极拓展」",
    },
    "/en/": {
      lang: "en-US",
      // title: "Cero Tech",
      // description: "「Engineered from Zero, Scaled to Extremes」",
    },
  },
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
