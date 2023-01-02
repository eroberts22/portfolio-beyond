<template>
  <h2>{{ Information.title }}<span>...</span></h2>
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
  color: var(--turquoise);
}

.text {
  font-family: "Poppins";
}
</style>