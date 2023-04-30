<template>
  <div class="list-box">
    <h3>{{ listObject.title }}</h3>
    <ul v-if="listObject.items">
      <li :key="item.text" v-for="item in listObject.items">
        <div v-if="!item.url">{{ item.text }}</div>
        <a v-if="item.url" :href="item.url">{{ item.text }}</a>
        <ul v-if="item.subInfo">
          <li :key="subItem.text" v-for="subItem in item.subInfo">
            {{ subItem.text }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListBuilder",
  props: {
    listObject: Object,
  },
};
</script>

<style scoped>
.list-box {
  padding: 10px;
}

ul {
  font-size: calc(0.75em + 1vmin);
}

ul li ul {
  color: var(--med-blue);
}
</style>