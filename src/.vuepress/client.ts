import { defineClientConfig } from '@vuepress/client';
import GoogleAdsense from './components/GoogleAdsense.vue';

export default defineClientConfig({
  enhance({ app }) {
    // 注册广告组件
    app.component('GoogleAdsense', GoogleAdsense);
  },
});