<template>
  <div class="col-lg-4 col-sm-12">
    <div class="card text-white bg-gray mb-3 text-center hoverable">
      <div class="card-body">
        <h2 class="card-title">{{ text }}</h2>
         <img class="card-img-top" :src="require('@/assets/icons/' + imgName)" alt="about-link" />

        <!-- <a href="about.html">
        </a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeTile',
  props: {
    text: String,
    imgName: String
  }
};
</script>

<style>
.card-title {
    color: gainsboro
}

.bg-gray {
    background-color: darkgray;
}
</style>