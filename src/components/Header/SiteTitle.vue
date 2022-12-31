<template>
<div class="logo">
    <router-link :to="{ name: 'Home'}">Portfolio Beyond<span>.</span></router-link>
</div>
</template>

<script>
export default {
  name: 'SiteTitle'
}
</script>

<style scoped>
.logo > a {
  margin: 0;
  text-decoration: none;
  color: var(--off-white);
  padding: 10px 16px;
  transition: color 0.3s ease;
  font-weight: 500;
  font-family: 'Poppins';
}

.logo {
    font-size: calc(1.5em + 1.5vmin);
    margin: 0.5rem 1.5rem;
}

.logo a span {
    color: var(--turquoise);
    transition: color 0.3s ease;
}

.logo a:hover {
    text-decoration: none;
    color: var(--turquoise);
}

.logo a:hover span {
    text-decoration: none;
    color: var(--off-white);
}
</style>