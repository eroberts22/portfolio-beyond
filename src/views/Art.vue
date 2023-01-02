<template>
  <ScrollUpButton />
  <PageTitle :Title="title" />
  <div class="central-box">
    <div class="row py-2">
      <div
        class="col-lg-4 col-sm-12 py-2"
        :key="card.text"
        v-for="card in cards"
      >
        <Tile :homeTile="card" />
      </div>
    </div>
  </div>

  <div id="space-explorer">
    <SpaceExplorer />
  </div>
  <div id="haunted-apothecary"></div>
  <div id="other-art"></div>
</template>

<script>
import ScrollUpButton from "../components/ScrollUpButton.vue";
import PageTitle from "../components/PageTitle.vue";
import Tile from "../components/Tile.vue";
import SpaceExplorer from "../components/Art/SpaceExplorer.vue"

export default {
  name: "ArtView",
  components: {
    ScrollUpButton,
    PageTitle,
    Tile,
    SpaceExplorer
  },
  data() {
    return {
      title: {
        text: "Art Portfolio",
        span: ".",
      },
      cards: [
        {
          text: "Space Explorer",
          src: "space-explorer.png",
          routePath: "/art#space-explorer",
        },
        {
          text: "Haunted Apothecary",
          src: "apothecary/shadow.png",
          routePath: "/art#haunted-apothecary",
        },
        {
          text: "Other Art",
          src: "icons/cloud.png",
          routePath: "/art#other-art",
        },
      ],
    };
  },
};
</script>

<style>
.album-grid {
  margin: 2% auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>