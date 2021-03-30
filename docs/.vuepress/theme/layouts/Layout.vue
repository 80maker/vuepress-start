<template>
  <div class="theme-container">
    <SideBar/>
    <Post v-if="$page.pid === 'post'"/>
    <Archive v-else-if="$page.pageType === 'archive'"/>
    <Home v-else />
    <SvgSprite/>
  </div>
</template>
<script>
import Post from '../components/Post'
import Archive from '../components/Archive'
import Home from '../components/Home'
import SideBar from '../components/SideBar'
import SvgSprite from '../components/SvgSprite.vue'
export default {
  name: 'Layout',
  components: {
    Home,
    Archive,
    SideBar,
    Post,
    SvgSprite
  }
}
</script>