<template>
  <Header/>
  <router-view/>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: "App",
  components: {
    Header
  },
};
</script>

<style>
body {
  background: #000;
  color: gainsboro;
  margin: 0;
  padding: 0;
  border: 0;
}

</style>
