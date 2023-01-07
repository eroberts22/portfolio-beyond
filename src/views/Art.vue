<template>
  <ScrollUpButton />
  <PageTitle :Title="title" />
  <div class="central-box">
    <div class="row py-2">
      <div class="col-xl-6 col-md-12 py-2">
        <h2>Game Assets</h2>
        <div class="row py-2">
          <div
            class="col-lg-6 col-md-6 py-2"
            :key="card.text"
            v-for="card in cards[0]"
          >
            <Tile :homeTile="card" />
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-md-12 py-2">
        <h2>Other Art</h2>
        <div class="row py-2">
          <div
            class="col-lg-6 col-md-6 py-2"
            :key="card.text"
            v-for="card in cards[1]"
          >
            <Tile :homeTile="card" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr class="line-break" />
  <div id="space-explorer"><SpaceExplorer /></div>
  <hr class="line-break" />
  <div id="haunted-apothecary"><HauntedApothecary /></div>
  <hr class="line-break" />
  <div id="fine-art"><FineArt /></div>
  <hr class="line-break" />
  <div id="digital-art"><DigitalArt /></div>
</template>

<script>
import ScrollUpButton from "../components/ScrollUpButton.vue";
import PageTitle from "../components/PageTitle.vue";
import Tile from "../components/Tile.vue";
import SpaceExplorer from "../components/Art/SpaceExplorerArt.vue";
import HauntedApothecary from "../components/Art/HauntedApothecaryArt.vue";
import DigitalArt from "../components/Art/DigitalArt.vue";
import FineArt from "../components/Art/FineArt.vue";

export default {
  name: "ArtView",
  components: {
    ScrollUpButton,
    PageTitle,
    Tile,
    SpaceExplorer,
    HauntedApothecary,
    DigitalArt,
    FineArt,
  },
  data() {
    return {
      title: {
        text: "Art Portfolio",
        span: ".",
      },
      cards: [
        [
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
        ],
        [
          {
            text: "Fine Art",
            src: "coffee-script/coffeecup.png",
            routePath: "/art#fine-art",
          },
          {
            text: "Digital Art",
            src: "icons/cloud.png",
            routePath: "/art#digital-art",
          },
        ],
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  font-family: "Poppins";
  color: var(--med-blue);
}

.line-break {
  border-top: 15px solid var(--off-white);
}
</style>