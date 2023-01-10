<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
body {
  background: #000;
  color: var(--off-white);
  margin: 0;
  padding: 0;
  border: 0;
  font-family: "Ubuntu";
}

.central-box {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-basis: 70%;
  flex-direction: column;
  box-sizing: border-box;
  overflow-wrap: break-word;
  word-break: keep-all;
  font-family: "Ubuntu";
  max-width: 85%;
  margin: auto;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  margin-top: 2%;
  margin-bottom: 5%;
  padding: 2%;
}

p {
  font-family: "Poppins";
  font-size: calc(0.75em + 1vmin);
}

p a {
  text-decoration: none;
  color: var(--turquoise);
  transition: color 0.3s ease;
}

p a:hover {
  color: var(--med-blue);
}

p img {
  max-width: 50%;
  float: right;
}

p span {
  color: var(--turquoise);
}

.album-grid {
  margin: 2% auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.inner-wrap-half {
  float: left;
  width: 100%;
}

.img-wrap {
  width: 100%;
  padding: 20px;
}

@media (min-width: 950px) {
  .inner-wrap-half {
    width: 50%;
  }

  .img-wrap {
    padding: 10px;
  }
}

.line-break {
  border-top: 8px solid var(--off-white);
  border-radius: 5px;
}
</style>
