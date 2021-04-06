<template>
  <div class="theme-container">
    <SideBar/>
    <Post v-if="$page.pid === 'post'"/>
    <Archive v-else-if="$page.pageType === 'archive'"/>
    <Category v-else-if="$page.pageType === 'category'" />
    <CategoryItem v-else-if="$page.pageType === 'categoryItem'" />
    <Tag v-else-if="$page.pageType === 'tag'" />
    <TagItem v-else-if="$page.pageType === 'tagItem'" />
    <Home v-else />
    <SvgSprite/>
  </div>
</template>
<script>
import Post from '../components/Post'
import Archive from '../components/Archive'
import Category from '../components/Category'
import CategoryItem from '../components/CategoryItem'
import Tag from '../components/Tag.vue'
import TagItem from '../components/TagItem.vue'
import Home from '../components/Home'
import SideBar from '../components/SideBar'
import SvgSprite from '../components/SvgSprite.vue'
export default {
  name: 'Layout',
  components: {
    Home,
    Archive,
    Category,
    CategoryItem,
    Tag,
    TagItem,
    SideBar,
    Post,
    SvgSprite
  }
}
</script>