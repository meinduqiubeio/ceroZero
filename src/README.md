---
home: true
icon: house
title: 主页 | Cero Tech
heroText: 「从零构建 - 向极拓展」
bgImage: /assets/images/bg5.jpg
heroFullScreen: true
bgImageStyle:
  opacity: 0.5
  background-position: 50% 60%
highlights:
  - header: 专业服务 · 一站式解决方案
    description: 为您在西班牙的生活和事业提供全方位支持
    bgImage: /assets/images/bg7.jpg
    bgImageDark: /assets/images/bg7.jpg
    bgImageStyle:
      background-repeat: no-repeat
      background-size: cover
      background-position: center
    features:
      - title: 网站开发
        icon: laptop-code
        details: 响应式网站设计，电商平台搭建，定制化开发解决方案
        link: /services/web-dev/dev.md

      - title: 电子菜单
        icon: utensils
        details: 餐厅数字化解决方案，支持多语言，扫码点餐，在线支付
        link: /services/e-menu/emenu.md

      - title: 西班牙语翻译
        icon: language
        details: 专业文件翻译，口译服务，商务谈判陪同
        link: /services/translation/

      - title: 买房贷款咨询
        icon: house-circle-check
        details: 房产投资建议，贷款方案对比，手续办理指导
        link: /services/real-estate/
---
<ParticleBackground />
<HeroEffects />

<div class="scroll-hint">
  <p>↓ 向下滚动探索更多服务 ↓</p>
</div>

<style>
.vp-hero-info-wrapper .vp-hero-title {
  font-size: 1.9rem;
  font-weight: bold;
}
.scroll-hint {
  position: fixed;
  bottom: 450px;
  left: 0;
  right: 0;
  text-align: center;
  color: var(--theme-color);
  font-weight: bold;
  animation: pulse 2s infinite;
  z-index: 10;
}

@media (max-width: 768px) {
  .scroll-hint {
    bottom: 850px;
    font-size: 0.9rem;
  }
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}
</style>