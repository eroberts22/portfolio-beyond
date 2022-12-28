<template>
  <div class="central-box">
    <div class="row">
      <HomeTile text="Projects" imgName="devproj.png" />
      <HomeTile text="Art" imgName="devart.png" />
      <HomeTile text="About" imgName="devabt.png"/>
    </div>
  </div>
</template>

<script>
import HomeTile from "./HomeTile.vue";

export default {
  name: "HomeTileViewer",
  components: {
    HomeTile,
  },
};
</script>

<style scoped>
</style>