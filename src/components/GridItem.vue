<template>
  <div class="grid-item">
    <img
      :src="require('@/assets/' + image.src)"
      :alt="format(image.title)"
      class="grid-img"
    />
    <div class="grid-item-description">
      {{ image.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "GridItem",
  props: {
    image: Object,
  },
  methods: {
    format(text) {
      return text.toLowerCase().trim().replace(" ", "-");
    },
  },
};
</script>

<style>
.grid-item {
  color: var(--off-white);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  overflow: hidden;
  flex-direction: column;
}

.grid-item-description {
  color: var(--off-white);
  padding-top: 5px;
  padding-bottom: 30px;
  font-family: "Poppins";
  cursor: default;
}
/*
.grid-item:hover .grid-item-description {
    visibility: visible;
    opacity: 1;
}
*/
.grid-item::after {
  content: "";
  display: block;
}

.grid-img {
  flex-shrink: 0;
  -webkit-flex-shrink: 0;
  max-width: 100%;
  max-height: 100%;
}
</style>