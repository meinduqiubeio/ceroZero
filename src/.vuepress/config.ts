import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
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
    googleAnalyticsPlugin({
      // 配置项
      id: 'G-G63MSQ1CCE',
    })
  ],
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      //title: "Cero Tech",
      //description: "「Engineered from Zero, Scaled to Extremes」",
    },
    "/zh/": {
      lang: "zh-CN",
      //title: "Cero Tech",
      //description: "「从零构建」- 「向极拓展」",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
