<template>
  <div @click="scrollToTop" class="scroll-up-btn" :class="{ 'show': scrolled }">
    <font-awesome-icon :icon="['fas', 'angle-up']" />
  </div>
</template>

<script>
export default {
  name: 'ScollUpButton',
  data() {
    return {
      scrollPosition: null
    }
  },
  computed: {
    scrolled() {
      return this.scrollPosition > 100
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    scrollToTop() {
      window.scrollTo(0,0);
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.updateScroll)
  }
}
</script>

<style scoped>
.scroll-up-btn {
    position: fixed;
    height: 40px;
    width: 40px;
    background: var(--med-blue);
    right: 20px;
    bottom: 20px;
    text-align: center;
    line-height: 42px;
    color: var(--off-white);
    z-index: 9999;
    font-size: 25px;
    border-radius: 10px;
    border-bottom-width: 2px;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
}

.scroll-up-btn.show {
    opacity: 1;
    pointer-events: auto;
}

.scroll-up-btn:hover {
    filter: brightness(90%);
}

</style>