<template>
  <div class="theme-container">
    <SideBar/>
    <Post v-if="$page.pid === 'post'"/>
    <Home v-else />
  </div>
</template>
<script>
import Post from '../components/Post'
import Home from '../components/Home'
import SideBar from '../components/SideBar'
export default {
  name: 'Layout',
  components: {
    Home,
    SideBar,
    Post
  }
}
</script>