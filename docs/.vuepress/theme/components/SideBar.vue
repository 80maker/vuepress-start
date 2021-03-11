<template>
  <div>
    SideBar {{$site.title}}
    <SubNav/>
    <NavBar/>
    <FooterBar/>
  </div>
</template>
<script>
import FooterBar from './FooterBar'
import SubNav from './SubNav'
import NavBar from './NavBar'
export default {
  name: 'SideBar',
  components: {
    FooterBar,
    NavBar,
    SubNav
  }
}
</script>