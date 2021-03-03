<template>
  <nav>
    <NavLink v-for="item in $themeConfig.nav" :item="item"/>
  </nav>
</template>

<script>
import NavLink from './NavLink'
export default {
  name: 'NavBar',
  components: {
    NavLink
  }
}
</script>