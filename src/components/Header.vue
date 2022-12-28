<template>
  <div class="navbar">
    <SiteTitle/>
    <Navigation/>
  </div>
</template>

<script>
import SiteTitle from './SiteTitle.vue'
import Navigation from './Navigation.vue'
export default {
  name: 'Header-Component',
  components: {
    SiteTitle,
    Navigation
  }
}
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>