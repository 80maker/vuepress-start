<template>
  <div class="theme-footer">
    <div class="social-links">
      <template v-for="item in $themeConfig.social">
        <a v-if="item.type === 'email'" :key="item.type" target="_blank" rel="external nofollow noopener"
        :title="`${item.type}`" :href="`mailto:${item.link}`">
          <Icon :icon="item.type"/>
        </a>
        <a v-else-if="item.type === 'github'" :key="item.type" target="_blank" rel="external nofollow noopener"
        :title="`${item.type}`" :href="`https://github.com/${item.link}`">
          <Icon :icon="item.type"/>
        </a>
        <a v-else
          :key="item.type"
          target="_blank"
          rel="external nofollow noopener"
          :title="`${item.type}`" :href="`${item.link}`">
          <Icon :icon="item.type"/>
        </a>
      </template>
    </div>
    <p class="copyright" v-html="$themeConfig.copyright"></p>
  </div>
</template>
<script>
export default {
  name: 'FooterBar'
}
</script>