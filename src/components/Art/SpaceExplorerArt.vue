<template>
  <PageTitle :Title="title" />
  <div class="album-grid">
    <GridItem :image="image" :key="image.title" v-for="image in imagesInGrid"></GridItem>
  </div>
  <GridItem :image="image"  :key="image.title" v-for="image in imagesOutsideGrid"></GridItem>
</template>

<script>
import PageTitle from "../PageTitle.vue";
import GridItem from "../GridItem.vue";

export default {
  name: "SpaceExplorer",
  components: {
    PageTitle,
    GridItem,
  },
  data() {
    return {
      title: {
        text: "Space Explorer",
        span: ".",
      },
      imagesInGrid: [
        {
          title: "Space Ship",
          src: "space-explorer/rocket.png",
        },
        {
          title: "Fuel Icon",
          src: "space-explorer/fuel.png",
        },
        {
          title: "Shield Icon",
          src: "space-explorer/shield.png",
        },
        {
          title: "Asteroid One",
          src: "space-explorer/asteroid1.png",
        },
        {
          title: "Asteroid Two",
          src: "space-explorer/asteroid2.png",
        },
        {
          title: "Comet",
          src: "space-explorer/comet.png",
        },
        {
          title: "End Portal",
          src: "space-explorer/portal-end.png",
        },
        {
          title: "Milky Way Portal",
          src: "space-explorer/milkyway-end.png",
        },
      ],
      imagesOutsideGrid: [
        {
          title: "Space Background - Layer One",
          src: "space-explorer/space-planets-back.png",
        },
        {
          title: "Space Background - Layer Two",
          src: "space-explorer/space-planets-front.png",
        },
        {
          title: "Space Background - Complete",
          src: "space-explorer/space-planets.png",
        },
      ],
    };
  },
};
</script>

<style>
</style>