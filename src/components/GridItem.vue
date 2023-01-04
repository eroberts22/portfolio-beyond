<template>
  <div class="grid-item">
    <img
      :src="require('@/assets/' + image.src)"
      :alt="format(image.title)"
      class="grid-img"
    />
    <!-- <div class="overlay">
      <div class="grid-item-description">Test</div>
    </div> -->
    <div class="grid-item-title">
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

.grid-item-title {
  color: var(--off-white);
  padding-top: 5px;
  padding-bottom: 30px;
  font-family: "Poppins";
  cursor: default;
}
/* 
.overlay {
  position: absolute;

  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}

.grid-item:hover .overlay {
  opacity: 1;
}

.grid-item-description {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
} */

/* .grid-item-description {
  visibility: hidden;
  opacity: 0;
}

.grid-item:hover .grid-item-description {
  visibility: visible;
  opacity: 1;
} */

.grid-item::after {
  content: "";
  display: block;
}

.grid-img {
  flex-shrink: 0;
  -webkit-flex-shrink: 0;
  max-width: 100%;
  max-height: 100%;
  padding: 20px;
}
</style>