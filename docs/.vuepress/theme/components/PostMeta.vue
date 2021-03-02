<template>
  <div class="post-meta">
    <a href="#">author: {{$frontmatter.author}}</a>
    <a href="#">date: {{date}}</a>
    <a href="#">category: {{$frontmatter.category}}</a>
    <p>tags:</p>
    <ul>
      <li v-for="item in tags"><a href="#">#{{item}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PostMeta',
  computed: {
    date() {
      return new Date(this.$frontmatter.date).toLocaleDateString()
    },
    tags() {
      let tags = this.$frontmatter.tags || [];
      return tags;
    }
  }
}
</script>