<template>
  <ul>
    <li :key="item.text" v-for="item in items">
      <div v-if="!item.url">{{ item.text }}</div>
      <a v-if="item.url" :href="item.url">{{ item.text }}</a>
      <ul v-if="item.subInfo">
        <li :key="subItem.text" v-for="subItem in item.subInfo">
          {{ subItem.text }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListBuilder",
  props: {
    items: Object,
  },
};
</script>

<style scoped>
ul li ul {
  color: var(--med-blue);
}
</style>