<template>
  <ScrollUpButton />
  <PageTitle :Title="title" />
  <div class="central-box">
    <Paragraph :item="info" />
  </div>
</template>

<script>
import ScrollUpButton from "../../components/ScrollUpButton.vue";
import PageTitle from "../../components/PageTitle.vue";
import Paragraph from "../../components/Paragraph.vue";

export default {
  name: "CoffeeScript",
  components: {
    ScrollUpButton,
    PageTitle,
    Paragraph,
  },
  data() {
    return {
      title: {
        text: "Coffee Script",
        span: "."
      },
      info: {
        text: "Coming Soon"
      }
    }
  },
};
</script>

<style>
</style>