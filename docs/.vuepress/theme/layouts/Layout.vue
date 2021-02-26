<template>
  <div class="theme-container">
    <SideBar/>
    <Home/>
  </div>
</template>
<script>
import Home from '../components/Home'
import SideBar from '../components/SideBar'
export default {
  components: {
    Home,
    SideBar
  }
}
</script>