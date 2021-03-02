<template>
  <div>
    <ul>
      <li v-for="item in $pagination.pages">
        <router-link :to="item.path">{{item.title}}</router-link>
      </li>
    </ul>
    <Pagination v-if="$pagination.length > 1"/>
  </div>
</template>
<script>
import { Pagination } from '@vuepress/plugin-blog/lib/client/components';
export default {
  name: 'Home',
  components: {
    Pagination
  }
}
</script>