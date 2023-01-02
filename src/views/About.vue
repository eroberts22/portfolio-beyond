<template>
  <div class="central-box">
    <div style="width: 100%">
      <div class="inner-wrap-twothird">
        <CommentTextBox :Information="AboutMe" />
        <hr class="line-break" />
        <div class="inner-wrap-half">
          <CommentTextBox :Information="Aspiring" />
        </div>
        <div class="inner-wrap-half">
          <CommentTextBox :Information="Hobbies" />
        </div>
      </div>
      <div class="inner-wrap-third">
        <img class="img-wrap" style="padding-bottom: 20%" :src="imgURL" />
        <div style="text-align: center">
          <LogoLink :link="linkedInURL" :logo="linkedInLogo" />
          <LogoLink :link="githubURL" :logo="githubLogo" />
          <LogoLink :link="resumeURL" :logo="resumeLogo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentTextBox from "../components/CommentTextBox.vue";
import LogoLink from "../components/About/LogoLink.vue";

export default {
  name: "AboutView",
  components: {
    CommentTextBox,
    LogoLink,
  },
  data() {
    return {
      AboutMe: {
        title: "About Me",
        textCollection: [
          { text: "automation engineer for Two Barrels LLC" },
          {
            text: "graduated May 2022 with Bachelor of Science in Computer Science",
          },
          {
            text: "experience tutoring for Whitworth University's Computer Science department",
          },
        ],
      },
      Aspiring: {
        title: "Aspiring",
        textCollection: [
          { text: "Software Developer" },
          { text: "Technical Artist" },
        ],
      },
      Hobbies: {
        title: "My Hobbies",
        textCollection: [
          { text: "Video Games" },
          { text: "Digital Art" },
          { text: "Gardening" },
        ],
      },
      imgURL: require("../assets/witch-ta.gif"),
      linkedInURL: "https://www.linkedin.com/in/elizabeth-roberts-in/",
      githubURL: "https://github.com/eroberts22",
      resumeURL: "",
      linkedInLogo: { prefix: "fab", icon: "linkedin" },
      githubLogo: { prefix: "fab", icon: "github" },
      resumeLogo: { prefix: "fas", icon: "file" },
    };
  },
};
</script>

<style scoped>
.inner-wrap-third,
.inner-wrap-twothird,
.inner-wrap-half {
  float: left;
  width: 100%;
}

.inner-wrap-half-small {
  float: left;
  width: 50%;
}

.img-wrap {
  width: 100%;
  padding: 20px;
}

@media (min-width: 950px) {
  .inner-wrap-half {
    width: 50%;
  }

  .inner-wrap-twothird {
    width: 66%;
  }

  .inner-wrap-third {
    width: 33%;
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