<template>
  <div>
    SideBar {{$site.title}}
    <FooterBar/>
  </div>
</template>
<script>
import FooterBar from './FooterBar'
export default {
  name: 'SideBar',
  components: {
    FooterBar
  }
}
</script>