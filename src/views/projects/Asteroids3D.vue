<template>
  <ScrollUpButton />
  <PageTitle :Title="pageTitle" />

  <!-- intro -->
  <div class="central-box">
    <div style="100%">
      <div class="inner-wrap-half">
        <p>{{ intro }}</p>
      </div>
      <div class="inner-wrap-half">
        <img
          style="width: 50%"
          :src="require('../../assets/space-explorer/asteroid1.png')"
          alt="asteroid1"
          class="img-wrap"
        />
        <img
          style="width: 50%"
          :src="require('../../assets/space-explorer/asteroid2.png')"
          alt="asteroid2"
          class="img-wrap"
        />
      </div>
    </div>
  </div>

  <!-- objects and textures -->
  <div id="objects">
    <PageTitle :Title="objectTitle" />
    <div class="album-grid">
      <GridItem
        :image="image"
        :key="image.title"
        v-for="image in imagesGridShip"
      />
    </div>
    <div class="album-grid">
      <GridItem
        :image="image"
        :key="image.title"
        v-for="image in imagesGridAsteroid"
      />
    </div>
  </div>

  <!-- game manual and build instructions -->
  <div id="build">
    <PageTitle :Title="manualTitle" />
    <div class="central-box">
      <div style="width: 100%">
        <div class="inner-wrap-half">
          <h4>Game Controls</h4>
          <ListBuilder :items="gameControls" />
          <h4>Goal</h4>
          <p>{{ goal }}</p>
          <h4>Debug Keys</h4>
          <ListBuilder :items="debugKeys" />
        </div>
        <div class="inner-wrap-half">
          <h4>Dependencies</h4>
          <ListBuilder :items="dependencies" />
          <h4>Run Program</h4>
          <ListBuilder :items="buildInstructions" />
        </div>
      </div>
    </div>
  </div>

  <!-- scene generation algorithms -->

  <!-- collision detection algorithms -->

  <!-- demo -->
  <div id="demo">
    <PageTitle :Title="demoTitle" />
    <div class="central-box">
      <div style="width: 100%">
        <LiteYouTubeEmbed id="-pqxC47Wv8w" title="Asteroids 3D" />
      </div>
    </div>
  </div>
</template>

<script>
import ScrollUpButton from "../../components/ScrollUpButton.vue";
import PageTitle from "../../components/PageTitle.vue";
import GridItem from "../../components/GridItem.vue";
import ListBuilder from "../../components/ListBuilder.vue";
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";

export default {
  name: "Asteroids3D",
  components: {
    ScrollUpButton,
    PageTitle,
    GridItem,
    ListBuilder,
    LiteYouTubeEmbed,
  },
  data() {
    return {
      pageTitle: {
        text: "3D Asteroids",
        span: ".",
      },
      objectTitle: {
        text: "Objects & Textures",
        span: ".",
      },
      manualTitle: {
        text: "Game Manual & Build Instructions",
        span: ".",
      },
      demoTitle: {
        text: "Demonstration",
        span: ".",
      },
      intro:
        "Asteroids 3D was developed in April of 2021 as the final project for Whitworth University's Computer Graphics course. I utilized C++ in combination with the openGL pipeline. Through the course, we learned how to render 3D objects created from Blender, compile the GLSL shading language, utilize lighting and textures, and understand object transformations.",
      goal: "As you start flying your spaceship, avoid colliding with asteroids as you fly through the solar system.",
      imagesGridShip: [
        {
          title: "Spaceship - Side View",
          src: "asteroids3D/spaceship.png",
        },
        {
          title: "Spaceship - Top View",
          src: "asteroids3D/spaceship-top.png",
        },
        {
          title: "Skybox",
          src: "asteroids3D/skybox.png",
        },
        {
          title: "Planet - Fire Variation",
          src: "asteroids3D/planet.png",
        },
      ],
      imagesGridAsteroid: [
        {
          title: "Asteroid One",
          src: "asteroids3D/asteroid1.png",
        },
        {
          title: "Asteroid Two",
          src: "asteroids3D/asteroid2.png",
        },
        {
          title: "Start Panel",
          src: "asteroids3D/start.png",
        },
        {
          title: "Lose Panel",
          src: "asteroids3D/lose.png",
        },
      ],
      gameControls: [
        { text: "Press R to start" },
        { text: "Press W to move up" },
        { text: "Press A to move left" },
        { text: "Press S to move down" },
        { text: "Press D to move left" },
      ],
      dependencies: [
        { text: "Cmake", url: "http://cmake.org/" },
        { text: "GLFW Library", url: "https://github.com/glfw/glfw" },
        {
          text: "SB7 Examples",
          url: "https://github.com/openglsuperbible/sb7code",
        },
      ],
      debugKeys: [
        {
          text: "Press X for bounding boxes of the starship and first two asteroids",
        },
        { text: "Press C to show generated asteroid field pattern" },
        { text: "Press V to show object to world matrix for first asteroid" },
        { text: "Press B to show object to world matrix for starship" },
      ],
      buildInstructions: [
        { text: "Open terminal in top level containing CMakeLists.txt" },
        {
          text: "When creating a new project run:",
          subInfo: [
            {
              text: 'cmake -G "MinGW Makefiles" -S . -B . -DCMAKE_INSTALL_PREFIX=C:\\mingw-w64\\mingw64\\x86_64-w64-mingw32',
            },
          ],
        },
        { text: "Build Program:", subInfo: [{ text: "mingw32-make" }] },
        {
          text: "Run Executable:",
          subInfo: [{ text: ".\\bin\\main.exe" }],
        },
      ],
    };
  },
};
</script>

<style scoped>
h4 {
  color: var(--turquoise);
}
</style>