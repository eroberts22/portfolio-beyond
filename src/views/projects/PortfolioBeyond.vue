<template>
  <ScrollUpButton />
  <PageTitle :Title="title" />

  <div class="central-box">
    <p>
      See the current source code
      <a href="https://github.com/eroberts22/portfolio-beyond" target="_blank">here</a>
      - Vue.js
    </p>
    <br />
    <p>
      See the old source code
      <a href="https://github.com/eroberts22/portfoliobeyond" target="_blank">here</a>
      - HTML/CSS/JavaScript
    </p>
    <br />
    
  </div>
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