<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer.vue"
export default {
  name: "App",
  components: {
    Header,
    Footer
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
  margin-bottom: 2%;
  padding: 2%;
}

li a {
  color: var(--off-white);
  transition: color 0.3s ease;
}

li a:hover {
  color: var(--med-blue);
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

.inner-wrap-third,
.inner-wrap-twothird,
.inner-wrap-half {
  float: left;
  width: 100%;
}

.img-wrap {
  width: 100%;
  padding: 10%;
}

@media (min-width: 950px) {
  .inner-wrap-half {
    width: 50%;
  }

  .img-wrap {
    padding: 10%;
  }

  .inner-wrap-twothird {
    width: 66%;
  }

  .inner-wrap-third {
    width: 33%;
  }
}

.line-break {
  border-top: 8px solid var(--off-white);
  border-radius: 5px;
}

h3 {
  color: var(--turquoise);
}
</style>
