<template>
<PageTitle :Title="title" />
  <div class="album-grid">
    <GridItem :image="image" :key="image.title" v-for="image in imagesOne"></GridItem>
  </div>
  <div class="album-grid">
    <GridItem :image="imageFireside"/>
  </div>
  <div class="album-grid">
    <GridItem :image="image" :key="image.title" v-for="image in imagesTwo"></GridItem>
  </div>
  <div class="album-grid">
    <GridItem :image="image" :key="image.title" v-for="image in imagesIcons"></GridItem>
  </div>
  <div class="album-grid">
    <GridItem :image="image" :key="image.title" v-for="image in imagesThree"></GridItem>
  </div>
</template>

<script>
import PageTitle from "../PageTitle.vue";
import GridItem from "../GridItem.vue";

export default {
  name: "DigitalArt",
  components: {
    PageTitle,
    GridItem,
  },
  data() {
    return {
      title: {
        text: "Digital Art",
        span: "."
      },
      imagesOne: [
        {
          title: 'Travelers',
          src: 'art-portfolio/digital/ghost.png'
        },
        {
          title: 'Creatures of the Forest',
          src: 'art-portfolio/digital/sagecropped.png'
        }
      ],
      imagesTwo: [
        {
          title: 'Cloud Icon',
          src: 'icons/cloudfav.png',
        },
        {
          title: 'Coffee Cup Icon',
          src: 'coffee-script/coffeecup.png',
        },
        {
          title: 'Flower Icon',
          src: 'flower.png',
        }
      ],
      imagesIcons: [
        {
          title: 'Microchip',
          src: 'icons/cpu.png',
        },
        {
          title: 'Memory Stick',
          src: 'icons/memory-stick.png',
        }
      ],
      imagesThree: [
        {
          title: 'Clouds Webpage',
          src: 'art-portfolio/digital/webpage-clouds.png',
        },
        {
          title: 'Dark Clouds Webpage',
          src: 'art-portfolio/digital/webpage-dark-clouds.png'
        }
      ],
      imageFireside: {
        title: 'Fireside',
        src: 'art-portfolio/digital/fireplace-t.png'
      }
    };
  },
};
</script>

<style>
</style>