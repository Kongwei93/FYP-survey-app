<template>
  <div class="card">
    <!-- <div class="card-image">
        <figure class="image is-3by2">
          <img :src="PHQ.jpg" />
        </figure>
      </div> -->
    <div class="card-content">
      <p class="title is-5">{{ stressScore }}</p>
      <div class="subtitle is-6"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Results",

  data() {
    return {
      message: ["Low stress", "Moderate stress", "High perceived stress"],
    };
  },
  computed: {
    stressScore() {
      return this.$store.state.stressScore;
    },
  },
};
</script>
