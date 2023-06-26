<template>
  <PageTitle :Title="title" />
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
import PageTitle from "../components/PageTitle.vue";
import CommentTextBox from "../components/CommentTextBox.vue";
import LogoLink from "../components/About/LogoLink.vue";

export default {
  name: "AboutView",
  components: {
    PageTitle,
    CommentTextBox,
    LogoLink,
  },
  data() {
    return {
      title: {
        text: "Hello There",
        span: "!",
      },
      AboutMe: {
        title: "About Me",
        textCollection: [
          { text: "software engineer for Two Barrels LLC" },
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
          { text: "Game Developer" },
          { text: "Technical Artist" },
        ],
      },
      Hobbies: {
        title: "My Hobbies",
        textCollection: [
          { text: "Video Games" },
          { text: "Digital & Traditional Art" },
          { text: "Gardening" },
        ],
      },
      imgURL: require("../assets/witch-ta.gif"),
      linkedInURL: "https://www.linkedin.com/in/elizabeth-roberts-in/",
      githubURL: "https://github.com/eroberts22",
      resumeURL: "/files/resume2023.docx",
      linkedInLogo: { prefix: "fab", icon: "linkedin" },
      githubLogo: { prefix: "fab", icon: "github" },
      resumeLogo: { prefix: "fas", icon: "file" },
    };
  },
};
</script>

<style scoped>
</style>