<template>
  <a :href="link" target="_blank">
    <font-awesome-icon
      class="small-logo"
      :icon="[logo.prefix, logo.icon]"
      size="2x"
    />
  </a>
</template>

<script>
export default {
  name: "LogoLink",
  props: {
    link: String,
    logo: Object,
  },
};
</script>

<style>
.small-logo {
  width: 50px;
  text-decoration: none;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
  color: var(--turquoise);
  transition: color 0.3s;
}

.small-logo:hover {
  opacity: 0.7;
  color: var(--med-blue);
}
</style>