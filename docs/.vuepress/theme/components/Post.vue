<template>
  <div class="post">
    <h1 class="title" v-if="$frontmatter.title">{{$frontmatter.title}}</h1>
    <PostMeta/>
    <Content/>
    <PostNav/>
  </div>
</template>

<script>
import PostMeta from './PostMeta'
import PostNav from './PostNav'
export default {
  name: 'Post',
  components: {
    PostMeta,
    PostNav
  }
}
</script>