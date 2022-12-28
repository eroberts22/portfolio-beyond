<template>
  <Header/>
  <router-view/>
</template>

<script>
import Header from './components/Header/Header.vue'

export default {
  name: "App",
  components: {
    Header
  },
};
</script>

<style>
body {
  
  /* background: #000; */
  color: gainsboro;
  margin: 0;
  padding: 0;
  border: 0;
  font-family: 'Ubuntu';
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
  background: rgba(0,0,0,0.5);
  border-radius: 6px;
  margin-top: 2%;
  margin-bottom: 5%;
  padding: 2%;
}
</style>
