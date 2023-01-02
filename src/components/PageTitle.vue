<template>
  <div class="page-title">
    {{ Title.text }}<span>{{ Title.span }}</span>
  </div>
</template>

<script>
export default {
  name: "HomeTitle",
  props: {
    Title: Object
  },
};
</script>

<style scoped>
.page-title {
  text-align: left;
  font-size: calc(1.5em + 1.5vmin);
  font-weight: 500;
  margin-top: 25px;
  margin-bottom: 10px;
  padding-left: 20%;
  padding-right: 20%;
}

.page-title span {
  color: var(--turquoise);
  text-decoration: none;
  transition: color 0.3s ease;
}

@media (max-width: 992px) {
  .page-title {
    padding-left: 10%;
    padding-right: 10%;
  }
}
</style>