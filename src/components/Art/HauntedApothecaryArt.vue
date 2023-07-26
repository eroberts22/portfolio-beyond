<template>
  <PageTitle :Title="title" />
  <div class="album-grid">
    <GridItem :image="image" :key="image.title" v-for="image in imagesInGrid"></GridItem >
  </div>
  <GridItem :image="image" :key="image.title" v-for="image in imagesOutsideGrid"></GridItem >
</template>

<script>
import PageTitle from "../PageTitle.vue";
import GridItem from "../GridItem.vue";

export default {
  name: "HauntedApothecary",
  components: {
    PageTitle,
    GridItem,
  },
  data() {
    return {
      title: {
        text: "Haunted Apothecary",
        span: ".",
      },
      imagesInGrid: [
        {
          title: "Friendly ghost",
          src: "apothecary/ghost1.png",
        },
        {
          title: "Malicious Spectre",
          src: "apothecary/spectre.png",
        },
        {
          title: "Wailing Wraith",
          src: "apothecary/wraith.png",
        },
        {
          title: "Sneaky Shade",
          src: "apothecary/shade.png",
        },
        {
          title: "Stinging Jellyfish",
          src: "apothecary/jellyfish.png",
        },
        {
          title: "Pale Shadow",
          src: "apothecary/shadow.png",
        },
        {
          title: "Twilight Nightmare",
          src: "apothecary/nightmare.png",
        },
        {
          title: "Health Potion",
          src: "apothecary/health_potion.png",
        },
        {
          title: "Spell Potion",
          src: "apothecary/spell_potion.png",
        },
        {
          title: "Life Potion",
          src: "apothecary/life_potion.png",
        },
        {
          title: "Treasure Chest",
          src: "apothecary/chest.png",
        },
      ],
      imagesOutsideGrid: [
      {
          title: "Dungeon Background",
          src: "apothecary/background.png",
        },
      ],
    };
  },
};
</script>

<style>
</style>