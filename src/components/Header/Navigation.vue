<template>
  <div class="navbar-links">
    <router-link :to="{ name: 'Home'}">HOME</router-link>
    <router-link :to="{ name: 'Projects'}">PROJECTS</router-link>
    <router-link :to="{ name: 'Art'}">ART PORTFOLIO</router-link>
    <router-link :to="{ name: 'About'}">ABOUT ME</router-link>
  </div>
</template>

<script>
export default {
  name: "Navigation-Component",
  components: {}
};
</script>

<style scoped>
.navbar-links > a {
  margin: 0;
  text-decoration: none;
  color: gainsboro;
  padding: 10px 16px;
  transition: color 0.3s ease;
}

.navbar-links a:hover {
  color: turquoise;
}

.navbar-links > .router-link-active,
.navbar-links > .router-link-exact-active {
  color: turquoise;
}

/*@media (max-width: 770px) {
  .toggle-button {
    display: flex;
  }

  .logo a {
    color: var(--turquoise);
  }

  .logo a span {
    color: var(--off-white);
  }

  .navbar-links {
    display: none;
    width: 100%;
  }

  .navbar {
    flex-direction: column;
    align-items: flex-start;
    background: black;
  }

  .navbar-links ul {
    width: 100%;
    flex-direction: column;
  }

  .navbar-links li {
    text-align: center;
  }

  .navbar-links li a {
    padding: 0.5rem 1rem;
    transition: color 0.3s ease;
    color: var(--turquoise);
  }

  .navbar-links li a:hover {
    color: var(--med-blue);
  }

  .navbar-links.active {
    display: flex;
    position: absolute;
    background: black;
    margin-top: 50px;
    transition: 0.3s;
  }
}*/
</style>