<template>
  <ScrollUpButton />
  <PageTitle :Title="title" />
</template>

<script>
import ScrollUpButton from "../../components/ScrollUpButton.vue";
import PageTitle from "../../components/PageTitle.vue";

export default {
  name: "PortfolioBeyond",
  components: {
    ScrollUpButton,
    PageTitle
  },
  data() {
    return {
      title: {
        text: "Portfolio Beyond",
        span: "."
      }
    }
  }
}
</script>

<style>
</style>