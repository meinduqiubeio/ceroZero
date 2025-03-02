<template>
  <div class="particle-background">
    <div class="particles-container"></div>
  </div>
</template>

<script>
export default {
  name: "ParticleBackground",
  mounted() {
    this.createParticles();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    createParticles() {
      const container = document.querySelector('.particles-container');
      if (!container) return;
      
      container.innerHTML = '';
      const particleCount = 50;
      
      // 粒子颜色 - 使用纯白色
      const colors = ['rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.6)'];
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = `${Math.random() * 5 + 1}px`;
        particle.style.height = particle.style.width;
        // 从颜色数组中随机选择一种颜色
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
        
        // 添加动画
        particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        
        // 创建动画关键帧
        const keyframes = `
          @keyframes float {
            0% {
              transform: translate(0, 0);
              opacity: ${Math.random() * 0.5 + 0.3};
            }
            50% {
              opacity: ${Math.random() * 0.7 + 0.3};
            }
            100% {
              transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
              opacity: ${Math.random() * 0.5 + 0.3};
            }
          }
        `;
        
        // 添加样式
        const style = document.createElement('style');
        style.textContent = keyframes;
        document.head.appendChild(style);
        
        container.appendChild(particle);
      }
    },
    handleResize() {
      this.createParticles();
    }
  }
}
</script>

<style scoped>
.particle-background {
  position: relative;
  width: 100%;
  height: 100%;
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -2;
  overflow: hidden;
}
</style>