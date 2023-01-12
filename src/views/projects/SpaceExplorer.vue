<template>
  <ScrollUpButton />
  <PageTitle :Title="title" />
  <div class="central-box">
    <div style="width: 100%">
      <div class="inner-wrap-half">
        <p>{{ info[0] }}</p>
        <br />
        <p>{{ info[1] }}</p>
        <br />
        <p>
          See the game assets
          <router-link to="/art#space-explorer">here</router-link>
        </p>
      </div>
      <div style="text-align: center" class="inner-wrap-half">
        <img
          :src="require('../../assets/space-explorer/rocket.png')"
          :alt="title.text"
          class="img-wrap"
        />
        <a
          :href="demoLink" target="_blank"
          class="btn btn-outline-light"
          >Demo</a
        >
        <p>Not configured to work on mobile</p>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollUpButton from "../../components/ScrollUpButton.vue";
import PageTitle from "../../components/PageTitle.vue";

export default {
  name: "SpaceExplorer",
  components: {
    ScrollUpButton,
    PageTitle,
  },
  data() {
    return {
      title: {
        text: "Space Explorer",
        span: ".",
      },
      demoLink: "https://eroberts22.github.io/space-explorer",
      info: [
        "Space Explorer is a sidescroller version of the classic asteroids game implemented using HTML, CSS, and Javascript. I developed this game alongside fellow students at Whitworth University, Ethan Worth and Owen Foster, for our Internet Applications Development class. As a group, we went from knowing very little about web applications to developing this game in two weeks. I developed and provided the assets for this project.",
        "The starship has launched from a planet deep within a distant solar system with one mission: to get back to Earth with treasures, scientific discoveries, and research advancements. Unfortunately, there are obstacles, and to make it to the portal that takes the ship home, these must be managed. Asteroids come hurtling through space, damaging the starship's shields. Fuel is limited, and every evasive maneuver drains it. Managing these resources is crucial, or else mission failure is inevitable.",
      ],
    };
  },
};
</script>

<style scoped>
.btn {
  font-family: "Poppins";
  font-size: calc(1em + 1vmin);
  margin-bottom: 25px;
}
</style>