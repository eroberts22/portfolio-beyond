<template>
  <div class="card text-white bg-gray mb-3 h-100 text-center">
    <div class="card-body">
      <router-link :to="`${homeTile.routePath}`">
        <h2 class="card-title">{{ homeTile.text }}</h2>
        <img
          class="card-img-top"
          :src="require('@/assets/' + homeTile.src)"
          :alt="format(homeTile.text)"
        />
        <p v-if="homeTile.description">{{ homeTile.description }}</p>
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
  methods: {
    format(text) {
      return text.toLowerCase().trim().replace(' ', '-')
    }
  }
};
</script>

<style scoped>
.card-title {
  color: var(--off-white);
  font-size: calc(1.2em + 1.0vmin);
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
  -webkit-box-shadow: inset 0px 0px 0px 10px var(--transparent-med-blue);
  -moz-box-shadow: inset 0px 0px 0px 10px var(--transparent-med-blue);
  box-shadow: inset 0px 0px 0px 10px var(--transparent-med-blue);
}

a {
  text-decoration: none;
}

p {
  font-family: "Poppins";
  color: var(--off-white);
  font-size: calc(0.75em + 1vmin);
}
</style>