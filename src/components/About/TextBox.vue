<template>
  <h1>{{ Information.title }}<span>...</span></h1>
  <br />
  <div class="text" :key="item.text" v-for="item in Information.textCollection">
    <span>//</span> {{ item.text }} <br /><br />
  </div>
</template>

<script>
export default {
  name: "TextBox",
  props: {
    Information: Object,
  },
};
</script>

<style scoped>
span {
  color: turquoise;
}

.text {
  font-family: "Poppins";
}
</style>