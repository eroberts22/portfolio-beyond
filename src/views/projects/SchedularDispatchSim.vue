<template>
  <ScrollUpButton />
  <PageTitle :Title="title" />
  <div class="central-box">
    <div style="width: 100%">
      <div class="inner-wrap-half"><Paragraph :item="info.overview" /></div>
      <div class="inner-wrap-half">
        <ListBuilder :listObject="info.definitions" />
      </div>
    </div>

    <hr class="line-break" />

    <h3>{{ info.diagramTitle }}</h3>
    <img
      style="filter: brightness(85%); padding: 20px"
      :src="require('../../assets/schedular/schedular-diagram.png')"
      alt="schedular-diagram"
      class="img-wrap"
    />

    <hr class="line-break" />

    <Paragraph :item="info.assumptions" />

    <ListBuilder :listObject="info.modeledAlgorithms" />

    <img
      style="filter: brightness(85%)"
      :src="require('../../assets/schedular/response.png')"
      alt="schedular-diagram"
      class="img-wrap"
    />

    <img
      style="filter: brightness(85%)"
      :src="require('../../assets/schedular/wait.png')"
      alt="schedular-diagram"
      class="img-wrap"
    />

    <img
      style="filter: brightness(85%)"
      :src="require('../../assets/schedular/turnaround.png')"
      alt="schedular-diagram"
      class="img-wrap"
    />

    <!-- <div style="width: 100%">
      <div class="inner-wrap-half">
        <img
          style="filter: brightness(85%)"
          :src="require('../../assets/schedular/response.png')"
          alt="schedular-diagram"
          class="img-wrap"
        />
      </div>
    </div>

    <div style="width: 100%">
      <div class="inner-wrap-half">
        <img
          style="filter: brightness(85%)"
          :src="require('../../assets/schedular/wait.png')"
          alt="schedular-diagram"
          class="img-wrap"
        />
      </div>
    </div>

    <div style="width: 100%">
      <div class="inner-wrap-half">
        <img
          style="filter: brightness(85%)"
          :src="require('../../assets/schedular/turnaround.png')"
          alt="schedular-diagram"
          class="img-wrap"
        />
      </div>
    </div> -->
  </div>
</template>

<script>
import ScrollUpButton from "../../components/ScrollUpButton.vue";
import PageTitle from "../../components/PageTitle.vue";
import Paragraph from "../../components/Paragraph.vue";
import ListBuilder from "../../components/ListBuilder.vue";

export default {
  name: "SchedularDispatchSim",
  components: {
    ScrollUpButton,
    PageTitle,
    Paragraph,
    ListBuilder,
  },
  data() {
    return {
      title: {
        text: "Process Schedular Simulation",
        span: ".",
      },
      info: {
        modeledAlgorithms: {
          title: "Modeled Algorithms",
          items: [
            {
              text: "RR1 - Round Robin with Time Quantum q = 1, Single Processor",
            },
            {
              text: "RR4 - Round Robin with Time Quantum q = 4, Single Processor",
            },
            {
              text: "RR8 - Round Robin with Time Quantum q = 8, Single Processor",
            },
            { text: "FCFS - First Come First Serve, Single Processor" },
            {
              text: "FCFS.MULT - First Come First Serve, Dual Processor, processes split evenly between processors",
            },
            {
              text: "FCFS.MULT.DIST - First Come First Serve, Dual Processor, processes split based on requirement of an I/O operation",
            },
            { text: "SPN - Shortest Process Next, Single Processor" },
            {
              text: "SPN.MULT - Shortest Process Next, Dual Processor, processes split evenly between processors",
            },
          ],
        },
        definitions: {
          title: "Definitions",
          items: [
            { text: "Response - " },
            { text: "Wait - " },
            { text: "Turnaround - The interval of time between the submission of a process and its completion. Includes execution time and as well as time spent waiting for resources" },
          ],
        },
        overview: {
          text: "This simulation tests different scheduling algorithms and processor configurations to collect data on average wait time, average response time, and average turnaround time for each algorithm. For this model, eight different configurations were tested on thirty simulated processes in five separate tests. The algorithms tested were Round Robin (RR), First Come First Serve (FCFS), and Shortest Process Next (SPN) with a few variations of each algorithm discussed below.",
        },
        assumptions: {
          title: "Assumptions of the Model",
          text: "An assumption made in designing this system is implementing the timing as discrete events, instead of using a continuous interval clock module. These discrete events include events such as CPU bursts, I/O bursts, and process shuffling. Process queues are modeled using deque containers, so the elements can be pushed and popped from both sides and for iterator functionality. In the model, the process at the front of the queue is the process that is currently executing. Upon arrival time, processes are moved to the CPU queue which holds processes that are ready for CPU execution. Processes in execution will run for their designated burst time. Some processes require an I/O operation. To model an I/O operation, when the I/O burst time is higher than the remaining CPU burst time, the process is moved to the I/O queue where it waits for I/O operation. Once I/O is completed, the process is moved back to the CPU queue where it is again ready for CPU execution.",
        },
        diagramTitle: "Process Schedular Diagram",
      },
    };
  },
};
</script>

<style>
</style>