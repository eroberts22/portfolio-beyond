<template>
  <ScrollUpButton />
  <PageTitle :Title="title" />
</template>

<script>
import ScrollUpButton from "../../components/ScrollUpButton.vue";
import PageTitle from "../../components/PageTitle.vue";

export default {
  name: "Asteroids3D",
  components: {
    ScrollUpButton,
    PageTitle
  },
  data() {
    return {
      title: {
        text: "3D Asteroids",
        span: "."
      }
    }
  }
}
</script>

<style>

</style>