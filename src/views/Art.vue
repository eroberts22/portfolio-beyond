<template>
  <ScrollUpButton />
  <PageTitle :titleText="text" :spanContent="span"/>
  
</template>

<script>
import ScrollUpButton from "../components/ScrollUpButton.vue"
import PageTitle from "../components/PageTitle.vue"

export default {
  name: 'ArtView',
  components: {
    ScrollUpButton,
    PageTitle
  },
  data() {
    return {
      text: "Art Portfolio",
      span: "."
    }
  }
}
</script>

<style>

</style>