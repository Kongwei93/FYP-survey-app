<template>
  <div class="title">{{ title }}</div>
  <div class="dropdown is-hoverable">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Question {{ position + 1 }}</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a
          class="dropdown-item"
          role="button"
          v-for="(question, id) in questions"
          :question="question"
          :key="id"
          @click="position = id"
        >
          Question {{ id + 1 }}
        </a>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <p class="title is-5">{{ questions[position] }}</p>
      </div>
    </div>
  </div>

  <div class="field py-3">
    <div class="field">
      <button
        class="button is-medium is-fullwidth is-rounded"
        @click="answered1"
      >
        Never
      </button>
    </div>
    <div class="field">
      <button
        class="button is-medium is-fullwidth is-rounded"
        @click="answered2"
      >
        Almost Never
      </button>
    </div>
    <div class="field">
      <button
        class="button is-medium is-fullwidth is-rounded"
        @click="answered3"
      >
        Sometimes
      </button>
    </div>
    <div class="field">
      <button
        class="button is-medium is-fullwidth is-rounded"
        @click="answered4"
      >
        Fairly Often
      </button>
    </div>
    <div class="field">
      <button
        class="button is-medium is-fullwidth is-rounded"
        @click="answered5"
      >
        Often
      </button>
    </div>
  </div>
  <div class="has-text-centered" v-if="optionValues.length > 9">
    <button class="button is-success is-medium" @click.once="submit">
      Submit
    </button>
  </div>
</template>

<script>
export default {
  name: "PerceivedSS",

  data() {
    return {
      position: 0,

      title: "Perceived Stress Scale",

      questions: [
        "In the last month, how often have you been upset because of something that happened unexpectedly?",
        "In the last month, how often have you felt that you were unable to control the important things in your life?",
        "In the last month, how often have you felt nervous and stressed",
        "In the last month, how often have you felt confident about your ability to handle your personal problems?",
        "In the last month, how often have you felt that things were going your way?",
        "In the last month, how often have you found that you could not cope with all the things you had to do?",
        "In the last month, how often have you been able to control irritations in your life?",
        "In the last month, how often have you felt that you were on top of things?",
        "In the last month, how often have you been angered because of things that were outside of your control?",
        "In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?",
      ],
      optionValues: [],
    };
  },
  methods: {
    answered1() {
      if (
        this.position === 3 ||
        this.position === 4 ||
        this.position === 6 ||
        this.position === 7
      ) {
        this.optionValues[this.position] = 4;
      } else {
        this.optionValues[this.position] = 0;
      }
      this.nextQuestion();
    },
    answered2() {
      if (
        this.position === 3 ||
        this.position === 4 ||
        this.position === 6 ||
        this.position === 7
      ) {
        this.optionValues[this.position] = 3;
      } else {
        this.optionValues[this.position] = 1;
      }
      this.nextQuestion();
    },
    answered3() {
      this.optionValues[this.position] = 2;
      this.nextQuestion();
    },
    answered4() {
      if (
        this.position === 3 ||
        this.position === 4 ||
        this.position === 6 ||
        this.position === 7
      ) {
        this.optionValues[this.position] = 1;
      } else {
        this.optionValues[this.position] = 3;
      }
      this.nextQuestion();
    },
    answered5() {
      if (
        this.position === 3 ||
        this.position === 4 ||
        this.position === 6 ||
        this.position === 7
      ) {
        this.optionValues[this.position] = 0;
      } else {
        this.optionValues[this.position] = 4;
      }
      this.nextQuestion();
    },
    nextQuestion() {
      if (this.position < 9) {
        this.position++;
      }
    },
    submit() {
      // Sums all the values in this array into a single value
      const newStressScore = this.optionValues.reduce(
        (acc, curr) => acc + curr,
        0
      );

      // Save it into vuex using a mutation
      this.$store.commit("updateStressScore", newStressScore);
      if (newStressScore > 13 && newStressScore < 27) {
        this.$store.commit("results", 6);
      } else if (newStressScore > 26) {
        this.$store.commit("results", 7);
      } else this.$store.commit("results", 5);

      // Change view once everything is done
      this.$router.push({ name: "results" });
    },
  },
};
</script>
