<template>
  <div>
    SideBar {{$site.title}}
    <NavBar/>
    <FooterBar/>
  </div>
</template>
<script>
import FooterBar from './FooterBar'
import NavBar from './NavBar'
export default {
  name: 'SideBar',
  components: {
    FooterBar,
    NavBar
  }
}
</script>