<template>
  <PageTitle :Title="title" />
  <div class="page-sub-title">
    My name is
    <router-link :to="{ name: 'About' }">Liz Roberts<span>.</span></router-link>
  </div>
</template>

<script>
import PageTitle from "../PageTitle.vue";

export default {
  name: "HomeTitle",
  components: {
    PageTitle,
  },
  data() {
    return {
      title: {
        text: "Welcome to Portfolio Beyond",
        span: ".",
      },
    };
  },
};
</script>

<style scoped>
.page-sub-title {
  text-align: left;
  font-size: calc(1.3em + 0.5vmin);
  font-weight: 400;
  padding-left: 20%;
  margin-bottom: 10px;
}

.page-sub-title span,
.page-sub-title a,
.page-sub-title a:hover span {
  color: var(--turquoise);
  text-decoration: none;
  transition: color 0.3s ease;
}

.page-sub-title a span,
.page-sub-title a:hover {
  color: var(--off-white);
  transition: color 0.3s ease;
}
</style>