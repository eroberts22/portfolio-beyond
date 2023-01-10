<template>
  <ScrollUpButton />
  <PageTitle :Title="title" />
</template>

<script>
import ScrollUpButton from "../../components/ScrollUpButton.vue";
import PageTitle from "../../components/PageTitle.vue";

export default {
  name: "HauntedApothecary",
  components: {
    ScrollUpButton,
    PageTitle
  },
  data() {
    return {
      title: {
        text: "Haunted Apothecary",
        span: "."
      }
    }
  }
}
</script>

<style>

</style>