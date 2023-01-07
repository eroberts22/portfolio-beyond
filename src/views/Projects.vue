<template>
  <ScrollUpButton />
  <PageTitle :Title="title" />

  <div class="central-box">
    <div class="row py-2">
      <div
        class="col-xl-3 col-lg-6 col-md-6 py-2"
        :key="card.text"
        v-for="card in cards[0]"
      >
        <Tile :homeTile="card" />
      </div>
    </div>
    <div class="row py-2">
      <div
        class="col-xl-3 col-lg-6 col-md-6 py-2"
        :key="card.text"
        v-for="card in cards[1]"
      >
        <Tile :homeTile="card" />
      </div>
    </div>
  </div>
</template>

<script>
import ScrollUpButton from "../components/ScrollUpButton.vue";
import PageTitle from "../components/PageTitle.vue";
import Tile from "../components/Tile.vue";

export default {
  name: "ProjectsView",
  components: {
    ScrollUpButton,
    PageTitle,
    Tile,
  },
  data() {
    return {
      title: {
        text: "Projects",
        span: ".",
      },
      cards: [
        [
          {
            text: "Space Explorer",
            src: "space-explorer.png",
            routePath: "/space-explorer",
          },
          {
            text: "Haunted Apothecary",
            src: "apothecary/shadow.png",
            routePath: "/haunted-apothecary",
          },
          {
            text: "3D Asteroids",
            src: "space-explorer/asteroid1.png",
            routePath: "/asteroids",
          },
          {
            text: "Portfolio Beyond",
            src: "icons/cloudfav.png",
            routePath: "/portfolio-beyond",
          },
        ],
        [
          {
            text: "Schedular Dispatch Sim",
            src: "icons/microchip-solid.svg",
            routePath: "/",
          },
          {
            text: "Memory Manager Library",
            src: "icons/memory-solid.svg",
            routePath: "/",
          },
          {
            text: "Coffee Script",
            src: "coffee-script/coffeecup.png",
            routePath: "/",
          },
          {
            text: "Farm Simulation",
            src: "flower.png",
            routePath: "/",
          },
        ],
      ],
    };
  },
};
</script>

<style>
</style>