import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import googleAdSensePlugin from 'vuepress-plugin-google-adsense2';
import theme from "./theme.js";

export default defineUserConfig({

  plugins: [
    // 添加你需要的插件
    googleAdSensePlugin({
      id: 'ca-pub-2072750546202515',
    }),
    googleAnalyticsPlugin({
      // 配置项
      id: 'G-G63MSQ1CCE',
    })
  ],
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      //title: "Blog Demo",
      description: "Share your life in Spain",
    },
    "/zh/": {
      lang: "zh-CN",
      //title: "cero zero",
      description: "西班牙生活、科技 分享",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
