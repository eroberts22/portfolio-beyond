<template>
  <ScrollUpButton />
  <PageTitle :titleText="text" :spanContent="span"/>
  <div class="central-box">
    <div class="row py-2">
      <div class="col-lg-4 col-sm-12 py-2" :key="card.text" v-for="card in cards">
        <Tile :homeTile="card" />
      </div>
    </div>
  </div>

  <div id="space-explorer"></div>
  <div id="haunted-apothecary"></div>
  <div id="other-art"></div>

</template>

<script>
import ScrollUpButton from "../components/ScrollUpButton.vue"
import PageTitle from "../components/PageTitle.vue"
import Tile from "../components/Tile.vue"

export default {
  name: 'ArtView',
  components: {
    ScrollUpButton,
    PageTitle,
    Tile
  },
  data() {
    return {
      text: "Art Portfolio",
      span: ".",
      cards: [
        {
          text: "Space Explorer",
          imgName: "space-explorer.png",
          routePath: "/art#space-explorer",
        },
        {
          text: "Haunted Apothecary",
          imgName: "apothecary/shadow.png",
          routePath: "/art#haunted-apothecary",
        },
        {
          text: "Other Art",
          imgName: "icons/cloud.png",
          routePath: "/art#other-art",
        },
      ],
    }
  }
}
</script>

<style>

</style>