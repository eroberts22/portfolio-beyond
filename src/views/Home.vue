<template>
  <HomeTitle />
  <HomeTileViewer />
</template>

<script>
import HomeTitle from '../components/Home/HomeTitle.vue';
import HomeTileViewer from '../components/Home/HomeTileViewer.vue'

export default {
  name: "HomeView",
  components: {
    HomeTitle,
    HomeTileViewer
  },
};
</script>

<style>
</style>