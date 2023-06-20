<template>
  <div v-show="!mobile" class="navbar-links">
    <router-link :to="{ name: 'Home' }">{{ navTitles[0] }}</router-link>
    <router-link :to="{ name: 'Projects' }">{{ navTitles[1] }}</router-link>
    <router-link :to="{ name: 'Experience' }">{{ navTitles[2] }}</router-link>
    <router-link :to="{ name: 'Art' }">{{ navTitles[3] }}</router-link>
    <router-link :to="{ name: 'About' }">{{ navTitles[4] }}</router-link>
  </div>
  <div class="icon">
    <font-awesome-icon
      class="sub-icon"
      @click="toggleMobileNav"
      v-show="mobile"
      :class="{ 'icon-active': mobileNav }"
      :icon="['fas', navIcon]"
    />
  </div>
  <transition name="mobile-nav">
    <div v-show="mobileNav" class="dropdown-nav">
    <router-link :to="{ name: 'Home' }">{{ navTitles[0] }}</router-link>
    <router-link :to="{ name: 'Projects' }">{{ navTitles[1] }}</router-link>
    <router-link :to="{ name: 'Experience' }">{{ navTitles[2] }}</router-link>
    <router-link :to="{ name: 'Art' }">{{ navTitles[3] }}</router-link>
    <router-link :to="{ name: 'About' }">{{ navTitles[4] }}</router-link>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Navigation-Component",
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      navTitles: [
        "HOME",
        "PROJECTS",
        "EXPERIENCE",
        "ART",
        "ABOUT"
      ]
    };
  },
  computed: {
    navIcon() {
    if (this.mobileNav) return 'times'
    return 'bars'
    }
  },
  created() {
    window.addEventListener("resize", this.checkScreenForMobile);
    this.checkScreenForMobile();
  },
  watch: {
    $route() {
      this.mobileNav = false;
    },
  },
  unmounted() {
    window.removeEventListener("resize", this.checkScreenForMobile);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreenForMobile() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 875) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
  },
};
</script>

<style scoped>
.navbar-links > a {
  margin: 0;
  text-decoration: none;
  color: var(--off-white);
  padding: 10px 16px;
  transition: color 0.3s ease;
  font-size: calc(0.75em + 1.5vmin);
}

.navbar-links a:hover {
  color: var(--turquoise);
}

.navbar-links > .router-link-active,
.navbar-links > .router-link-exact-active {
  color: var(--turquoise);
}

.icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 20px;
  height: 100%;
}

.icon .sub-icon {
  cursor: pointer;
  font-size: 32px;
}

.icon-active {
  color: var(--med-blue);
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  padding-top: 25px;
  height: 100%;
  background-color: var(--gray);
  top: 0;
  left: 0;
  z-index: 999;
  box-shadow: 0 0 10px var(--transparent-black);
}

.dropdown-nav > a {
  padding: 15px 30px;
  color: var(--turquoise);
  text-decoration: none;
  transition: color 0.3s ease;
}

.dropdown-nav > a:hover {
  padding: 15px 30px;
  color: var(--off-white);
  text-decoration: none;
}

.dropdown-nav > .router-link-active,
.dropdown-nav > .router-link-exact-active {
  color: var(--off-white);
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 0.5s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}
</style>