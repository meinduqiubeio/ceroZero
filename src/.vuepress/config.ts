import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { socialSharePlugin } from 'vuepress-plugin-social-share';


import theme from "./theme.js";

export default defineUserConfig({

  pagePatterns: [
    '**/*.md',
    '!**/secret/**', 
    '!**/secret/**/**', // 排除隐藏目录
  ],
  head: [
    ['script', { 
      id: 'CookieDeclaration',
      src: 'https://consent.cookiebot.com/6de2a54e-c721-480d-9f82-b65954fe08b3/cd.js',
      type: 'text/javascript',
      async: true,
      'data-lang': 'zh' // 支持多语言版本
    }
    ],
    [
      'script',
      {
        id: 'Cookiebot',
        async: true,
        defer: true,
        src: 'https://consent.cookiebot.com/uc.js',
        'data-cbid': '6de2a54e-c721-480d-9f82-b65954fe08b3',
        'data-blockingmode': 'auto' // 自动阻止非必要脚本
      }
    ],
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
      // title: "Cero Tech",
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
