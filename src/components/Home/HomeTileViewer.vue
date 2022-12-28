<template>
  <div class="central-box">
    <div class="row">
      <div :key="card.text" v-for="card in cards">
        <HomeTile :homeTile="card" />
      </div>
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
  data() {
    return {
      cards: [
        {
          text: "Projects",
          imgName: "devproj.png",
          routePath: "/projects",
        },
        {
          text: "Art",
          imgName: "devart.png",
          routePath: "/art",
        },
        {
          text: "About",
          imgName: "devabt.png",
          routePath: "/about",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>