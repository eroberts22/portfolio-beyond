<template>
  <ScrollUpButton />
  <PageTitle :Title="title" />
  <div class="central-box">
    <div class="row py-2">
      <div class="col-xl-6 col-md-12 py-2">
        <h2>Game Assets</h2>
        <div class="row py-2">
          <div class="col-lg-6 col-md-6 py-2">
            <div @click="changeComponent('SpaceExplorer')"
              class="card text-white bg-gray mb-3 h-100 text-center"
            >
              <div class="card-body">
                <h3 class="card-title">Space Explorer</h3>
                <img
                  class="card-img-top"
                  src="../assets/space-explorer.png"
                  alt="space-explorer"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 py-2">
            <div @click="changeComponent('HauntedApothecary')"
              class="card text-white bg-gray mb-3 h-100 text-center"
            >
              <div class="card-body">
                <h3 class="card-title">Haunted Apothecary</h3>
                <img
                  class="card-img-top"
                  src="../assets/apothecary/shadow.png"
                  alt="haunted-apothecary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-md-12 py-2">
        <h2>Other Art</h2>
        <div class="row py-2">
          <div class="col-lg-6 col-md-6 py-2">
            <div @click="changeComponent('FineArt')"
              class="card text-white bg-gray mb-3 h-100 text-center"
            >
              <div class="card-body">
                <h3 class="card-title">Fine Art</h3>
                <img
                  class="card-img-top"
                  src="../assets/coffee-script/coffeecup.png"
                  alt="fine-art"
                />
              </div>
            </div>
            
          </div>
          <div class="col-lg-6 col-md-6 py-2">
            <div @click="changeComponent('DigitalArt')"
              class="card text-white bg-gray mb-3 h-100 text-center"
            >
              <div class="card-body">
                <h3 class="card-title">Digital Art</h3>
                <img
                  class="card-img-top"
                  src="../assets/icons/cloud.png"
                  alt="digital-art"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <component v-bind:is="currentComponent" />

</template>

<script>
import ScrollUpButton from "../components/ScrollUpButton.vue";
import PageTitle from "../components/PageTitle.vue";
import SpaceExplorer from "../components/Art/SpaceExplorerArt.vue";
import HauntedApothecary from "../components/Art/HauntedApothecaryArt.vue";
import DigitalArt from "../components/Art/DigitalArt.vue";
import FineArt from "../components/Art/FineArt.vue";

export default {
  name: "ArtView",
  components: {
    ScrollUpButton,
    PageTitle,
    SpaceExplorer,
    HauntedApothecary,
    DigitalArt,
    FineArt,
  },
  data() {
    return {
      currentComponent: null,
      title: {
        text: "Art Portfolio",
        span: ".",
      },
    };
  },
  methods: {
    changeComponent(newComponent) {
      console.log(newComponent)
      this.currentComponent = newComponent
    }
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
  font-family: "Poppins";
  color: var(--med-blue);
  font-size: calc(1.75em + 1vmin)
}

.card-title {
  color: var(--off-white);
  font-size: calc(1.6em + 1vmin);
}

.bg-gray {
  background-color: var(--gray);
}

.card {
  -o-transition: 0.3s;
  -ms-transition: 0.3s;
  -moz-transition: 0.3s;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  margin: 5px;
}

.card:hover {
  -webkit-box-shadow: inset 0px 0px 0px 10px var(--transparent-med-blue);
  -moz-box-shadow: inset 0px 0px 0px 10px var(--transparent-med-blue);
  box-shadow: inset 0px 0px 0px 10px var(--transparent-med-blue);
}

a {
  text-decoration: none;
}
</style>