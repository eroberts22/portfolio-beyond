<template>
  <ScrollUpButton />
  <PageTitle :Title="title" />
  <div class="central-box">
    <div style="width: 100%">
      <div class="inner-wrap-half">
        <Paragraph :item="info" />
        <p>
          See the source code
          <a href="https://github.com/eroberts22/coffeescript" target="_blank">here</a>
        </p>
      </div>
      <div class="inner-wrap-half">
        <img
          :src="require('../../assets/coffee-script/coffeecup.png')"
          :alt="title.text"
          class="img-wrap img-wrap-custom"
        />
      </div>
    </div>

    <hr class="line-break" />

    <div style="width: 100%">
      <div class="inner-wrap-third">
        <Paragraph :item="testScriptOutput" />
      </div>
      <div class="inner-wrap-third">
        <img
          :src="require('../../assets/coffee-script/test-script.png')"
          alt="test-script"
          class="img-wrap img-wrap-custom-code"
        />
      </div>
      <div class="inner-wrap-third">
        <img
          :src="require('../../assets/coffee-script/script-output.png')"
          alt="script-output"
          class="img-wrap img-wrap-custom-code"
        />
      </div>
      
    </div>

    <hr class="line-break" />

    <div style="width: 100%">
      <div class="inner-wrap-third">
        <Paragraph :item="languageAndStructure" />
      </div>
      <div class="inner-wrap-third">
        <img
          :src="require('../../assets/coffee-script/language-design.png')"
          alt="language-design"
          class="img-wrap img-wrap-custom-code"
        />
      </div>
      <div class="inner-wrap-third">
        <img
          :src="require('../../assets/coffee-script/Bison-structure.png')"
          alt="bison-structure"
          class="img-wrap img-wrap-custom-code"
        />
      </div>
    </div>   

    <hr class="line-break" />

    <div style="width: 100%">
      <div class="inner-wrap-half">
        <Paragraph :item="commandGeneration" />
      </div>
      <div class="inner-wrap-half">
        <img
          :src="require('../../assets/coffee-script/gencode-addcmd.png')"
          alt="add-cmd"
          class="img-wrap img-wrap-custom-code"
        />
      </div>
    </div>

    <hr class="line-break" />

    <div style="width: 100%">
      <div class="inner-wrap-half">
        <Paragraph :item="headerGeneration" />
      </div>
      <div class="inner-wrap-half">
        <img
          :src="require('../../assets/coffee-script/init-var.png')"
          alt="init-var"
          class="img-wrap img-wrap-custom-code"
        />
      </div>
    </div>

    <div style="width: 100%">
      <div class="inner-wrap-twothird">
        <img
          :src="require('../../assets/coffee-script/headergeneration.png')"
          alt="header-generation"
          class="img-wrap img-wrap-custom-code"
        />
      </div>
      <div class="inner-wrap-third">
        <img
          :src="require('../../assets/coffee-script/generated-header.png')"
          alt="generated-header"
          class="img-wrap img-wrap-custom-code"
        />
      </div>
    </div>

    <hr class="line-break" />

    <div style="width: 100%">
      <Paragraph :item="mainGeneration" />
      <img
        :src="require('../../assets/coffee-script/test-cpp-generation.png')"
        alt="test-cpp-generation"
        class="img-wrap img-wrap-custom-code"
      />
    </div>

  </div>
</template>

<script>
import ScrollUpButton from "../../components/ScrollUpButton.vue";
import PageTitle from "../../components/PageTitle.vue";
import Paragraph from "../../components/Paragraph.vue";

export default {
  name: "CoffeeScript",
  components: {
    ScrollUpButton,
    PageTitle,
    Paragraph,
  },
  data() {
    return {
      title: {
        text: "Coffee Maker Script",
        span: "."
      },
      info: {
        text: "The coffee maker scripting language simulates potential interactions a user would have with a coffee maker, such as brewing coffee and setting the amount and strength of the coffee. Many coffee makers have a display that shows the current time, so to simulate that, I implemented a command to get the current time."
      },
      testScriptOutput: {
          title: "Test Script & Output",
          text: "This is an example of a simple test script and the output it generates when run through the program.",
      },
      languageAndStructure: {
          title: "Language & Structure",
          text: "These are key words recognized by the lexer as well as the structure recognized by the parser. The parser generates commands which are added to a list to later be coverted to C++.",
      },
      commandGeneration: {
          title: "Command Generation",
          text: "When the `gencodeItem` function is called, it generates a command from the code it receives from the parser. The command is then added to the list of commands that will later be converted to C++ code.",
      },
      headerGeneration: {
          title: "C++ Header Generation",
          text: "The `generate_var_table` function generates a table containing all the default necessary variables that will be generated into C++ by the `addHeader function`. The `addHeader` iterates through the variable table and writes to a .cpp file.",
      },
      mainGeneration: {
          title: "C++ Main Function Generation",
          text: "The `addProgram` function runs through the list of commands and generates the following file.",
      },
    }
  },
};
</script>

<style scoped>
.img-wrap-custom {
  padding: 20%;
  padding-top: 0%;
}

.img-wrap-custom-code {
  padding: 5%;
}

p {
  padding: 10px;
}
</style>