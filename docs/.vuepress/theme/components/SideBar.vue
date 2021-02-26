<template>
  <div>
    SideBar {{$site.title}}
    <FooterBar/>
  </div>
</template>
<script>
import FooterBar from './FooterBar'
export default {
  components: {
    FooterBar
  }
}
</script>