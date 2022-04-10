<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="card" v-if="results == 1">
        <figure class="image is-3by2">
          <img src="PHQLow.jpg" />
        </figure>
        <div class="notification is-success has-text-centered">
          You score a {{ pHQScore }}/30 on the Patient Health Questionnaire.
          <br />
          This suggests that you do not require any forms of treatment for
          depression.
        </div>
      </div>
      <div class="card" v-if="results == 2">
        <figure class="image is-3by2">
          <img src="PHQmild.jpg" />
        </figure>
        <div class="notification is-info has-text-centered">
          You score a {{ pHQScore }}/30 on the Patient Health Questionnaire.
          <br />
          You are showing mild signs of depression. Seek help from a healthcare
          professional.
        </div>
      </div>
      <div class="card" v-if="results == 3">
        <figure class="image is-3by2">
          <img src="PHQmoderate.jpg" />
        </figure>
        <div class="notification is-warning has-text-centered">
          You score a {{ pHQScore }}/30 on the Patient Health Questionnaire.
          <br />
          You are showing moderate signs of depression. Seek help from a
          healthcare professional.
        </div>
      </div>
      <div class="card" v-if="results == 4">
        <figure class="image is-3by2">
          <img src="PHQsevere.jpg" />
        </figure>
        <div class="notification is-danger has-text-centered">
          You score a {{ pHQScore }}/30 on the Patient Health Questionnaire.
          <br />
          You are showing severe signs of depression. Seek help from a
          healthcare professional.
        </div>
      </div>
      <div class="card" v-if="results == 5">
        <figure class="image is-3by2">
          <img src="lowStressLevels.jpg" />
        </figure>
        <div class="notification is-success has-text-centered">
          You score a {{ stressScore }}/40 on the Perceived Stress Scale.
          <br />
          You are exhibitng low stress levels.
        </div>
      </div>
      <div class="card" v-if="results == 6">
        <figure class="image is-3by2">
          <img src="moderateStressLevels.jpg" />
        </figure>
        <div class="notification is-warning has-text-centered">
          You score a {{ stressScore }}/40 on the Perceived Stress Scale.
          <br />
          You are exhibitng moderate stress levels. Seek help from a
          professional.
        </div>
      </div>
      <div class="card" v-if="results == 7">
        <figure class="image is-3by2">
          <img src="highStressLevels.jpg" />
        </figure>
        <div class="notification is-danger has-text-centered">
          You score a {{ stressScore }}/40 on the Perceived Stress Scale.
          <br />
          You are exhibiting high stress levels. Seek help from a professional.
        </div>
      </div>
      <div class="card" v-if="results == 8">
        <figure class="image is-3by2">
          <img src="highStressLevels.jpg" />
        </figure>
        <div class="notification is-success has-text-centered">
          You score a {{ cesDScore }}/60 on the CES Depression Scale.
          <br />
          You are exhibiting high stress levels. Seek help from a professional.
        </div>
      </div>
      <div class="card" v-if="results == 9">
        <figure class="image is-3by2">
          <img src="highStressLevels.jpg" />
        </figure>
        <div class="notification is-primary has-text-centered">
          You score a {{ cesDScore }}/60 on the CES Depression Scale.
          <br />
          You are exhibiting high stress levels. Seek help from a professional.
        </div>
      </div>
      <div class="card" v-if="results == 10">
        <figure class="image is-3by2">
          <img src="highStressLevels.jpg" />
        </figure>
        <div class="notification is-info has-text-centered">
          You score a {{ cesDScore }}/60 on the CES Depression Scale.
          <br />
          You are exhibiting high stress levels. Seek help from a professional.
        </div>
      </div>
      <div class="card" v-if="results == 11">
        <figure class="image is-3by2">
          <img src="highStressLevels.jpg" />
        </figure>
        <div class="notification is-warning has-text-centered">
          You score a {{ cesDScore }}/60 on the CES Depression Scale.
          <br />
          You are exhibiting high stress levels. Seek help from a professional.
        </div>
      </div>
      <div class="card" v-if="results == 12">
        <figure class="image is-3by2">
          <img src="highStressLevels.jpg" />
        </figure>
        <div class="notification is-danger has-text-centered">
          You score a {{ cesDScore }}/60 on the CES Depression Scale.
          <br />
          You are exhibiting high stress levels. Seek help from a professional.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Results",

  data() {
    return {};
  },
  computed: {
    stressScore() {
      return this.$store.state.stressScore;
    },
    pHQScore() {
      return this.$store.state.pHQScore;
    },
    cesDScore() {
      return this.$store.state.cesDScore;
    },
    results() {
      return this.$store.state.results;
    },
  },
};
</script>
