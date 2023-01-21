<template>
  <ScrollUpButton />
  <PageTitle :Title="title" />

  <div class="central-box">
    <!-- General Overview -->
    <div style="width: 100%">
      <div class="inner-wrap-half">
        <p>{{ info.intro }}</p>
        <p>
          See the source code
          <a href="https://github.com/eroberts22/farm-sim" target="_blank"
            >here</a
          >
        </p>
        <div style="text-align: center">
          <img
            style="width: 75%"
            :src="require('../../assets/flower.png')"
            alt="options"
            class="img-wrap"
          />
        </div>
      </div>
      <div class="inner-wrap-half">
        <img
          :src="require('../../assets/farm-sim/start.png')"
          alt="start"
          class="img-wrap"
        />
      </div>
    </div>

    <hr class="line-break" />

    <!-- purchase vegetables -->
    <div style="width: 100%">
      <div class="inner-wrap-half">
        <Paragraph :item="info.purchaseVegetables" />
      </div>
      <div class="inner-wrap-half">
        <img
          :src="require('../../assets/farm-sim/purchase.png')"
          alt="purchase"
          class="img-wrap"
        />
      </div>
    </div>

    <hr class="line-break" />

    <!-- water garden -->
    <div style="width: 100%">
      <div class="inner-wrap-half">
        <Paragraph :item="info.waterGarden" />
      </div>
      <div class="inner-wrap-half">
        <img
          :src="require('../../assets/farm-sim/watergarden.png')"
          alt="water"
          class="img-wrap"
        />
        <img
          :src="require('../../assets/farm-sim/waterexceed.png')"
          alt="water"
          class="img-wrap"
        />
      </div>
    </div>

    <hr class="line-break" />

    <!-- harvest vegetables -->
    <div style="width: 100%">
      <div class="inner-wrap-half">
        <Paragraph :item="info.harvestVegetables" />
      </div>
      <div class="inner-wrap-half">
        <img
          :src="require('../../assets/farm-sim/harvested.png')"
          alt="water"
          class="img-wrap"
        />
      </div>
    </div>

    <hr class="line-break" />

    <!-- sell vegetables -->
    <div style="width: 100%">
      <div class="inner-wrap-half">
        <Paragraph :item="info.sellVegetables" />
      </div>
      <div class="inner-wrap-half">
        <img
          :src="require('../../assets/farm-sim/sellitems.png')"
          alt="water"
          class="img-wrap"
        />
      </div>
    </div>

    <hr class="line-break" />

    <!-- progress day -->
    <div style="width: 100%">
      <div v-show="!mobile">
        <div class="inner-wrap-half">
          <img
            :src="require('../../assets/farm-sim/dayprogress1.png')"
            alt="water"
            class="img-wrap"
          />
          <img
            :src="require('../../assets/farm-sim/dayprogress2.png')"
            alt="water"
            class="img-wrap"
          />
        </div>
        <div class="inner-wrap-half">
          <Paragraph :item="info.progressDay" />
        </div>
      </div>

      <div v-show="mobile">
        <div class="inner-wrap-half">
          <Paragraph :item="info.progressDay" />
        </div>
        <div class="inner-wrap-half">
          <img
            :src="require('../../assets/farm-sim/dayprogress1.png')"
            alt="water"
            class="img-wrap"
          />
          <img
            :src="require('../../assets/farm-sim/dayprogress2.png')"
            alt="water"
            class="img-wrap"
          />
        </div>
      </div>
    </div>

    <hr class="line-break" />

    <!-- show garden and storage -->
    <div style="width: 100%">
      <div class="inner-wrap-half">
        <Paragraph :item="info.showGardenAndStorage" />
        <img
          :src="require('../../assets/farm-sim/storageexample.png')"
          alt="water"
          class="img-wrap"
        />
      </div>
      <div class="inner-wrap-half">
        <img
          :src="require('../../assets/farm-sim/gardenexample.png')"
          alt="water"
          class="img-wrap"
        />
      </div>
    </div>

    <hr class="line-break" />

    <!-- show stats -->
    <div style="width: 100%">
      <div class="inner-wrap-half">
        <Paragraph :item="info.showStats" />
      </div>
      <div class="inner-wrap-half">
        <img
          :src="require('../../assets/farm-sim/statsexample.png')"
          alt="water"
          class="img-wrap"
        />
      </div>
    </div>

    <hr class="line-break" />

    <!-- exit simulation -->
    <div style="width: 100%">
      <div v-show="!mobile">
        <div class="inner-wrap-half">
          <img
            :src="require('../../assets/farm-sim/options.png')"
            alt="water"
            class="img-wrap"
          />
        </div>
        <div class="inner-wrap-half">
          <Paragraph :item="info.exitSimulation" />
        </div>
      </div>

      <div v-show="mobile">
        <div class="inner-wrap-half">
          <Paragraph :item="info.exitSimulation" />
        </div>
        <div class="inner-wrap-half">
          <img
            :src="require('../../assets/farm-sim/options.png')"
            alt="water"
            class="img-wrap"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollUpButton from "../../components/ScrollUpButton.vue";
import PageTitle from "../../components/PageTitle.vue";
import Paragraph from "../../components/Paragraph.vue";

export default {
  name: "FarmSimulation",
  components: {
    ScrollUpButton,
    PageTitle,
    Paragraph,
  },
  created() {
    window.addEventListener("resize", this.checkScreenForMobile);
    this.checkScreenForMobile();
  },
  unmounted() {
    window.removeEventListener("resize", this.checkScreenForMobile);
  },
  methods: {
    checkScreenForMobile() {
      if (window.innerWidth <= 950) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
    },
  },
  data() {
    return {
      mobile: null,
      title: {
        text: "Farm Simulation",
        span: ".",
      },
      info: {
        intro:
          "This project simulates a vegetable farm. It's main functionality is to purchase, grow, harvest, and sell plants. The overall purpose is to gain a profit from the vegetables they choose to plant and sell. This program is a console-based simulation.",
        purchaseVegetables: {
          title: "Purchasing Vegetables",
          text: "The user is able to purchase five types of vegetables: carrots, turnips, cucumbers, tomatoes, and lettuce. Each vegetable has a different set price so one must be mindful of the amount of vegetables they want to purchase. Any vegetables purchased will be directly planted in the garden.",
        },
        waterGarden: {
          title: "Water Garden",
          text: "Vegetables in the garden are kept healthy by watering them. If the garden is not kept watered day to day, vegetables will begin to die. The water level is on a scale of zero to ten. It cannot exceed a maximum limit of ten. There is a warning if the water level goes below three. If the water level reaches zero, then a vegetable has a chance of dying, and no profit can be gained from it.",
        },
        harvestVegetables: {
          title: "Harvest Vegetables",
          text: "Vegetables can be harvested after a certain number of days have passed and the vegetables have matured. When the vegetables are removed from the garden, they are put into storage and able to be sold.",
        },
        sellVegetables: {
          title: "Sell Vegetables",
          text: "Harvested vegetables contained in storage can be sold. The vegetables will sell for a slightly higher price then they were purchased for as seeds, thus making a profit.",
        },
        progressDay: {
          title: "Progress Day",
          text: "The progress day option ages up all the vegetables in the garden by one every day. Aging up plants is necessary because they can only be harvestable after a certain number of days have passed. The progress day option also lowers the water level by one, so it is important to be aware of the water level.",
        },
        showGardenAndStorage: {
          title: "Show Garden and Show Storage",
          text: "The user can see a user-friendly visualization of the vegetables in the garden and in storage. The garden is shown by outputting five rows, one to represent each vegetable type and uses a  ' * ' to represent one plant. The storage shows the amount of each type of vegetable being stored.",
        },
        showStats: {
          title: "Show Stats",
          text: "This function can be called at any time during the simulation, but will also show at the end when exiting the simulation. It shows the number of each type of vegetable sold and the number of days that have elapsed. It also shows the money the user has currently, a cumulative of what they have spent, a cumulative of what they have earned, and the profit they have made.",
        },
        exitSimulation: {
          title: "Exit Simulation",
          text: "The simulation can be exited at any time. The final stats will be displayed before the simulation ends.",
        },
      },
    };
  },
};
</script>

<style scoped>
.img-wrap {
  padding: 20px;
}
</style>