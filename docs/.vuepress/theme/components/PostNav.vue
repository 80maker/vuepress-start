<template>
  <div class="post-nav">
    <div>上一篇: <router-link v-if="prevPost" :to="prevPost.path">{{prevPost.title}}</router-link><span v-else>无</span></div>
    <div>下一篇: <router-link v-if="nextPost" :to="nextPost.path">{{nextPost.title}}</router-link><span v-else>无</span></div>
  </div>
</template>

<script>
export default {
  name: 'PostNav',
  computed: {
    nextPost() {
      let list = this.getArticleList();
      const index = list.findIndex(item => {
        return item.path === this.$page.path;
      })
      if (index === -1) {
        return;
      }
      return list[index + 1];
    },
    prevPost() {
      let list = this.getArticleList();
      const index = list.findIndex(item => {
        return item.path === this.$page.path;
      })
      if (index === -1) {
        return;
      }
      return list[index - 1];
    }
  },
  methods: {
    getArticleList() {
      const pid = this.$page.pid;
      let list = this.$site.pages.filter(item => {
        return item.pid === pid;
      });
      list = list.sort((a,b) => {
        let time1 = new Date(a.frontmatter.date);
        let time2 = new Date(b.frontmatter.date);
        return time1 - time2;
      })
      return list;
    }
  }
}
</script>