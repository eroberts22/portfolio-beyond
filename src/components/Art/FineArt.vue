<template>
  <PageTitle :Title="title"/>
  <div class="album-grid">
     <GridItem :image="image" :key="image.title" v-for="image in imagesColorful"></GridItem>
  </div>
  <div class="album-grid">
     <GridItem :image="image" :key="image.title" v-for="image in imagesShapes"></GridItem>
  </div>
  <div class="album-grid">
     <GridItem :image="image" :key="image.title" v-for="image in imagesSketch"></GridItem>
  </div>
  <div class="album-grid">
     <GridItem :image="image" :key="image.title" v-for="image in imagesSketchCloud"></GridItem>
  </div>
</template>

<script>
import PageTitle from "../PageTitle.vue";
import GridItem from "../GridItem.vue";

export default {
  name: "FineArt",
  components: {
    PageTitle,
    GridItem,
  },
  data() {
    return {
      title: {
        text: "Fine Art",
        span: "."
      },
      imagesSketch: [
        {
          title: "Sketch - Woman I",
          src: "art-portfolio/physical/sketch-fallout.jpg",
        },
        {
          title: "Sketch - Woman II",
          src: "art-portfolio/physical/sketch-depth.jpg",
        },
        {
          title: "Sketch - Pale Eyes",
          src: "art-portfolio/physical/sketch-pale-eyes.jpg",
        },
        {
          title: "Sketch - Minerals",
          src: "art-portfolio/physical/sketch-minerals.jpg",
        },
        {
          title: "Sketch - Eye",
          src: "art-portfolio/physical/eye.jpg",
        },
      ],
      imagesSketchCloud: [
       {
          title: "Sketch - Fiery Clouds",
          src: "art-portfolio/physical/sketch-fire-clouds.jpg",
        },
        {
          title: "Sketch - Cotton Candy",
          src: "art-portfolio/physical/sketch-cotton-candy-clouds.jpg",
        },
      ],
      imagesShapes: [
        {
          title: "Circles",
          src: "art-portfolio/physical/circles.jpg",
        },
        {
          title: "Roadways",
          src: "art-portfolio/physical/roadways.jpg",
        },
      ],
      imagesColorful: [
        {
          title: "Far Sky",
          src: "art-portfolio/physical/oil-far-sky.jpg",
        },
        {
          title: "Pale Forest",
          src: "art-portfolio/physical/pale-forest.jpg",
        },
        {
          title: "Not So Lonely House",
          src: "art-portfolio/physical/watercolor-hello-house.jpg",
        },
        {
          title: "Deep Space",
          src: "art-portfolio/physical/watercolor-space.jpg",
        },
      ]
    };
  },
};
</script>

<style>
</style>