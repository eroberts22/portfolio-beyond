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
          See the source code
          <a href="https://github.com/eroberts22/apothecary" target="_blank"
            >here</a
          >
        </p>
        <br />
        <p>
          See the game assets
          <router-link to="/art#haunted-apothecary">here</router-link>
        </p>
      </div>
      <div class="inner-wrap-half">
        <img
          :src="require('../../assets/apothecary/shadow.png')"
          :alt="title.text"
          class="img-wrap"
        />
      </div>
    </div>
  </div>

  <!-- demo -->
  <PageTitle :Title="demoTitle"/>
  <div class="central-box">
    <div style="width: 100%">
      <LiteYouTubeEmbed id="Ztg2l8GjFS0" title="Haunted Apothecary" />
    </div>
  </div>
</template>

<script>
import ScrollUpButton from "../../components/ScrollUpButton.vue";
import PageTitle from "../../components/PageTitle.vue";
import LiteYouTubeEmbed from "vue-lite-youtube-embed"
import 'vue-lite-youtube-embed/style.css'

export default {
  name: "HauntedApothecary",
  components: {
    ScrollUpButton,
    PageTitle,
    LiteYouTubeEmbed
  },
  data() {
    return {
      title: {
        text: "Haunted Apothecary",
        span: ".",
      },
      demoTitle: {
        text: "Demonstration",
        span: ".",
      },
      info: [
        "Haunted Apothecary is a dungeon crawler game written in Java. I developed this game as well as the assets for it for Whitworth University's Java Application Development course.",
        "You have wandered into an old apothecary and have lost your way. As you explore the maze of rooms, you come across abandoned potions and ancient treasures, but unfortunately, this apothecary is haunted. Fortunately, along with the potions you have discovered, you are equipped with spells to aid you in battle against the spectres and spirits.",
      ],
    };
  },
};
</script>

<style scoped>
</style>