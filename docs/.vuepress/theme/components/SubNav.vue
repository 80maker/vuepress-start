<template>
  <div class="subnav">
    <router-link to="/archives">文章总数:{{count}}</router-link>
    <router-link to="/categories">分类:{{$category.length}}</router-link>
    <router-link to="/tags">标签: {{$tag.length}}</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      let list = this.$site.pages.filter(item => {
        return item.id === 'post';
      })
      return list.length;
    }
  }
}
</script>

<style>

</style>