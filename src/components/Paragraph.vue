<template>
  <div class="paragraph">
    <h3>{{ item.title }}</h3>
    <p>{{ item.text }}</p>
  </div>

</template>

<script>
export default {
  name: "Paragraph",
  props: {item: Object}
}
</script>

<style scoped>
.paragraph {
  padding: 10px;
}

h3 {
  color: var(--turquoise);
}
</style>