<template>
  <div class="central-box">
    <div class="row">
      <div class="col-xl-3 col-md-6 col-12 py-2" :key="card.text" v-for="card in cards">
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
          src: "icons/devproj.png",
          routePath: "/projects",
        },
        {
          text: "Experience",
          src: "icons/devexp.png",
          routePath: "/experience"
        },
        {
          text: "Art",
          src: "icons/devart.png",
          routePath: "/art",
        },
        {
          text: "About",
          src: "icons/devabt.png",
          routePath: "/about",
        },
      ],
    };
  },
};
</script>

<style>
</style>