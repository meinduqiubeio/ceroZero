<template>
  <div class="google-adsense">
    <ins class="adsbygoogle"
         style="display:block"
         :data-ad-client="client"
         :data-ad-slot="slot"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  </div>
</template>

<script>
export default {
  name: 'GoogleAdsense',
  props: {
    client: {
      type: String,
      default: 'ca-pub-2072750546202515'
    },
    slot: {
      type: String,
      default: '3037493779'
    }
  },
  mounted() {
    // 确保 adsbygoogle 已加载
    this.$nextTick(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error('AdSense error:', error);
      }
    });
  }
}
</script>

<style>
.google-adsense {
  margin: 15px auto;
  max-width: 80%;
  padding: 10px;
  border-radius: 8px;
  background-color: var(--bg-color-secondary, #f8f8f8);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

@media (max-width: 719px) {
  .google-adsense {
    max-width: 95%;
    margin: 10px auto;
  }
}
</style>