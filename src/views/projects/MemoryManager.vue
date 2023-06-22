<template>
  <ScrollUpButton />
  <PageTitle :Title="title" />
  <div class="central-box">
    <Paragraph :item="info" />
    <p>
      See the source code
      <a href="https://github.com/eroberts22/memory-manager-library" target="_blank">here</a>
    </p>
    
    <hr class="line-break">

    <PageTitle :Title="codeTitle"/>
    <div style="width: 100%">
      <div class="inner-wrap-half">
        <h3>Invalid Delete Check</h3>
        <img
          :src="require('../../assets/memory-manager/invalid-delete.png')"
          alt="invalid-delete"
          class="img-wrap"
        />
      </div>
      <div class="inner-wrap-half">
        <h3>Memory Leak Check</h3>
        <img
          :src="require('../../assets/memory-manager/memory-leak.png')"
          alt="memory-leak"
          class="img-wrap"
        />
      </div>
    </div>

    <br />
    <div style="width: 100%">
      <div class="inner-wrap-half">
        <h3>Various Test Cases</h3>
        <img
          :src="require('../../assets/memory-manager/code.png')"
          alt="code"
          class="img-wrap"
        />
      </div>
      <div class="inner-wrap-half">
        <h3>Output of Test Cases</h3>
        <img
          :src="require('../../assets/memory-manager/output.png')"
          alt="output"
          class="img-wrap"
        />
      </div>
    </div>

    <hr class="line-break">

    <PageTitle :Title="compilationTitle"/>
    <Paragraph :item="debugCompilation" />
    <Paragraph :item="regularCompilation" />

  </div>
</template>

<script>
import ScrollUpButton from "../../components/ScrollUpButton.vue";
import PageTitle from "../../components/PageTitle.vue";
import Paragraph from "../../components/Paragraph.vue";

export default {
  name: "MemoryManager",
  components: {
    ScrollUpButton,
    PageTitle,
    Paragraph,
  },
  data() {
    return {
      title: {
        text: "Memory Manager",
        span: "."
      },
      info: {
        text: "The memory manager creates a structure that keeps track of addresses in memory that have been allocated. When a pointer is initialized with the 'new' operator, its address will be added to the memory manager. When a pointer is deleted with the 'delete' operator, its address will be removed from the memory manager. The memory manager checks for two types of memory errors: invalid deletes and memory leaks. If a pointer's address is not allocated, and there is an attempt to delete it with the 'delete' operator, its address will not be found in the memory manager, thus notifying the user of an invalid delete. If there are addresses remaining in the memory manager after the program has ended, this will notify the user of a memory leak."
      },
      compilationTitle: {
        text: "Compilation",
        span: ".",
      },
      debugCompilation: {
          title: "Debug Compilation (enables memory manager)",
          text: "g++ -D DEBUG -o main main.cpp",
      },
      regularCompilation: {
          title: "Regular Compilation",
          text: "g++ -o main main.cpp",
      },
      codeTitle: {
        text: "Memory Checks",
        span: ".",
      },
    }
  },
};
</script>

<style scoped>
p {
  padding: 10px;
}

.img-wrap {
  padding: 2%;
}
</style>