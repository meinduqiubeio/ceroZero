<template>
  <div class="hero-effects"></div>
</template>

<script>
export default {
  name: "HeroEffects"
}
</script>

<style>
/* 英雄文本动画效果 */
.vp-hero-info-wrapper .vp-hero-info__title {
  color: #ffffff;
  text-shadow: 0 0 10px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6);
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6);
  }
  to {
    text-shadow: 0 0 15px rgba(0, 0, 255, 0.9), 0 0 30px rgba(0, 0, 255, 0.7), 0 0 40px rgba(0, 0, 255, 0.5);
  }
}

/* 背景图片增强 */
.vp-hero-info-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 50, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%);
  z-index: -1;
}

/* 鼠标悬停效果 */
.vp-hero-info-wrapper:hover .vp-hero-info__title {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}
</style>