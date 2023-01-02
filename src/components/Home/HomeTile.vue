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

.card {
    -o-transition: 0.3s;
    -ms-transition: 0.3s;
    -moz-transition: 0.3s;
    -webkit-transition: 0.3s;
    transition: 0.3s;
}

.card:hover {
  -webkit-box-shadow: inset 0px 0px 0px 10px var(--opaque-purple);
  -moz-box-shadow: inset 0px 0px 0px 10px var(--opaque-purple);
  box-shadow: inset 0px 0px 0px 10px var(--opaque-purple);
}

a {
  text-decoration: none;
}
</style>