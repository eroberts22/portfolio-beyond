<template>
  <div class="central-box">
    <div class="row">
      <div class="col-lg-4 col-sm-12" :key="card.text" v-for="card in cards">
        <Tile :homeTile="card" />
      </div>
    </div>
  </div>
</template>

<script>
import Tile from "../Tile.vue";

export default {
  name: "HomeTileViewer",
  components: {
    Tile,
  },
  data() {
    return {
      cards: [
        {
          text: "Projects",
          imgName: "icons/devproj.png",
          routePath: "/projects",
        },
        {
          text: "Art",
          imgName: "icons/devart.png",
          routePath: "/art",
        },
        {
          text: "About",
          imgName: "icons/devabt.png",
          routePath: "/about",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>