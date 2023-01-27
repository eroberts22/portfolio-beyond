<template>
  <ScrollUpButton />
  <PageTitle :Title="title" />
  <div class="central-box">
    <Paragraph :item="info.assumptions" />
    <ListBuilder :listObject="info.modeledAlgorithms" />
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
        text: "Schedular Dispatch Simulation",
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
              text: "FCFS.MULT.DIST - First Come First Serve, Dual Processor, processes split by if I/O operation is required or not",
            },
            { text: "SPN - Shortest Process Next, Single Processor" },
            {
              text: "SPN.MULT - Shortest Process Next, Dual Processor, processes split evenly between processors",
            },
          ],
        },
        assumptions: {
          title: "Assumptions of the Model",
          text: "An assumption made in designing this system is implementing the timing as discrete events, instead of using a continuous interval clock module. These discrete events include events such as CPU bursts, I/O bursts, and process shuffling. Process queues are modeled using deque containers, so the elements can be pushed and popped from both sides and for iterator functionality. In the model, the process at the front of the queue is the process that is currently executing. Upon arrival time, processes are moved to the CPU queue which holds processes that are ready for CPU execution. Processes in execution will run for their designated burst time. Some processes require an I/O operation. To model an I/O operation, when the I/O burst time is higher than the remaining CPU burst time, the process is moved to the I/O queue where it waits for I/O operation. Once I/O is completed, the process is moved back to the CPU queue where it is again ready for CPU execution."
        }
      },
    };
  },
};
</script>

<style>
</style>