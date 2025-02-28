import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import theme from "./theme.js";

export default defineUserConfig({
  head: [
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
      description: "「Engineered from Zero, Scaled to Extremes」",
    },
    "/zh/": {
      lang: "zh-CN",
      //title: "Cero Tech",
      description: "「从零构建」- 「向极拓展」",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
