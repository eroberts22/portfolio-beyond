<template>
  <ScrollUpButton />
  <PageTitle :Title="title" />

  <!-- General Overview -->
  <div class="central-box"></div>

  <!-- Game Functionality -->

</template>

<script>
import ScrollUpButton from "../../components/ScrollUpButton.vue";
import PageTitle from "../../components/PageTitle.vue";

export default {
  name: "FarmSimulation",
  components: {
    ScrollUpButton,
    PageTitle
  },
  data() {
    return {
      title: {
        text: "Farm Simulation",
        span: "."
      },
      info: {
        intro: "",
      }
    }
  }
}
</script>

<style>
</style>