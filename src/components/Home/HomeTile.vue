<template>
  <div class="card text-white bg-gray mb-3 text-center">
    <div class="card-body">
      <router-link :to="`${homeTile.routePath}`">
        <h2 class="card-title">{{ homeTile.text }}</h2>
        <img
          class="card-img-top"
          :src="require('@/assets/icons/' + homeTile.imgName)"
          alt="about-link"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTile",
  props: {
    homeTile: Object,
  },
};
</script>

<style scoped>
.card-title {
  color: var(--off-white);
}

.bg-gray {
  background-color: var(--gray);
}

a {
  text-decoration: none;
}
</style>