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
            description: "A Javascript Game"
          },
          {
            text: "Haunted Apothecary",
            src: "apothecary/shadow.png",
            routePath: "/haunted-apothecary",
            description: "A Java Game"
          },
          {
            text: "3D Asteroids",
            src: "space-explorer/asteroid2.png",
            routePath: "/asteroids",
            description: "C++/OpenGL 3D Game"
          },
          {
            text: "Portfolio Beyond",
            src: "icons/cloudfav.png",
            routePath: "/portfolio-beyond",
            description: "This Website"
          },
        ],
        [
          {
            text: "Schedular Dispatch Sim",
            src: "icons/cpu.png",
            routePath: "/schedular-dispatch",
            description: "CPU Dispatch Scheduling Model"
          },
          {
            text: "Memory Manager",
            src: "icons/memory-stick.png",
            routePath: "/memory-manager",
            description: "Memory Error Handling Library"
          },
          {
            text: "Coffee Script",
            src: "coffee-script/coffeecup.png",
            routePath: "/coffee-script",
            description: "Scanner and Parser"
          },
          {
            text: "Farm Simulation",
            src: "flower.png",
            routePath: "/farm-simulation",
            description: "A C++ Command Prompt Game"
          },
        ],
      ],
    };
  },
};
</script>

<style>
</style>