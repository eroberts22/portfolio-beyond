<template>
  <div class="grid-item">
    <div class="grid-img-wrap">
      <img
        :src="require('@/assets/' + image.src)"
        :alt="format(image.title)"
        class="grid-img"
      />
      <div v-show="!mobile" class="grid-img-description-layer">
        <div class="grid-img-description">
          {{ image.title }}
        </div>
      </div>
    </div>
    <div v-show="mobile" class="grid-item-title">
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
  data() {
    return {
      mobile: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreenForMobile);
    this.checkScreenForMobile();
  },
  unmounted() {
    window.removeEventListener("resize", this.checkScreenForMobile);
  },
  methods: {
    format(text) {
      return text.toLowerCase().trim().replace(" ", "-");
    },
    checkScreenForMobile() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 875) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
    },
  },
};
</script>

<style scoped>
.grid-item {
  color: var(--off-white);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  overflow: hidden;
  flex-direction: column;
  font-family: "Poppins";
}

.grid-item-title {
  color: var(--off-white);
  padding-top: 5px;
  padding-bottom: 30px;
  font-size: calc(1em + 1vmin);
  cursor: default;
}

.grid-img-wrap {
  position: relative;
  display: inline-block;
}

.grid-img {
  flex-shrink: 0;
  -webkit-flex-shrink: 0;
  position: relative;
  max-width: 100%;
  max-height: 100%;
  padding: 20px;
}

.grid-img-description-layer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--transparent-black);
  color: var(--off-white);
  visibility: hidden;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity 0.5s, visibility 0.5s;
}

.grid-img-wrap:hover .grid-img-description-layer {
  visibility: visible;
  opacity: 1;
}

.grid-img-description {
  transition: 0.5s;
  font-size: calc(1.2em + 1vmin);
  text-align: center;
}
</style>