<template>
  <PageTitle :Title="title" />
  <div class="album-grid">
    <GridItem
      :image="image"
      :key="image.title"
      v-for="image in imagesColorful1"
    ></GridItem>
  </div>
  <div class="album-grid">
    <GridItem
      :image="image"
      :key="image.title"
      v-for="image in imagesColorful2"
    ></GridItem>
  </div>
  <div class="album-grid">
    <GridItem
      :image="image"
      :key="image.title"
      v-for="image in imagesCreaturesAndCharacters"
    ></GridItem>
  </div>
  <div class="album-grid">
    <GridItem
      :image="image"
      :key="image.title"
      v-for="image in imagesStillLife"
    ></GridItem>
  </div>
  <div class="album-grid">
    <GridItem
      :image="image"
      :key="image.title"
      v-for="image in imagesShapes"
    ></GridItem>
  </div>
  <div class="album-grid">
    <GridItem
      :image="image"
      :key="image.title"
      v-for="image in imagesSketch1"
    ></GridItem>
  </div>
  <div class="album-grid">
    <GridItem
      :image="image"
      :key="image.title"
      v-for="image in imagesSketch2"
    ></GridItem>
  </div>
  <div class="album-grid">
    <GridItem
      :image="image"
      :key="image.title"
      v-for="image in imagesSketchCloud"
    ></GridItem>
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
        span: ".",
      },
      imagesSketch1: [
        // {
        //   title: "Jolyne Cujoh",
        //   src: "art-portfolio/physical/jolyne-cujoh.jpg",
        // },
        {
          title: "Sketch - Woman I",
          src: "art-portfolio/physical/sketch-fallout.jpg",
        },
        {
          title: "Sketch - Woman II",
          src: "art-portfolio/physical/sketch-depth.jpg",
        },
        {
          title: "Sketch - Kenway",
          src: "art-portfolio/physical/kenway.jpg"
        }
      ],
      imagesSketch2: [
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
          title: "Bridges & Tunnels",
          src: "art-portfolio/physical/roadways.jpg",
        },
      ],
      imagesColorful1: [
        {
          title: "Pale Forest",
          src: "art-portfolio/physical/pale-forest.jpg",
        },
        {
          title: "Deep Space",
          src: "art-portfolio/physical/watercolor-space.jpg",
        },
      ],
      imagesColorful2: [
        {
          title: "Dandy",
          src: "art-portfolio/physical/dandy.jpg"
        },
        {
          title: "Far Sky",
          src: "art-portfolio/physical/oil-far-sky.jpg",
        },
        {
          title: "Holly",
          src: "art-portfolio/physical/holly.jpg",
        },
      ],
      imagesStillLife: [
        {
          title: "Evening",
          src: "art-portfolio/physical/living-room.jpg",
        },
        {
          title: "Still Life",
          src: "art-portfolio/physical/still-life.jpg",
        },
      ],
      imagesCreaturesAndCharacters: [
        {
          title: "Lonely House",
          src: "art-portfolio/physical/watercolor-hello-house.jpg",
        },
        {
          title: "We Have Visitors",
          src: "art-portfolio/physical/forest-spirits.jpg",
        },
        {
          title: "Reimi Sugimoto",
          src: "art-portfolio/physical/reimi-sugimoto.jpg",
        },
      ],
    };
  },
};
</script>

<style>
</style>