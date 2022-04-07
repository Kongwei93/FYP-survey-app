<template>
  <div>
    <div class="title">{{ title }}</div>
    <div class="dropdown is-hoverable">
      <div class="dropdown-trigger">
        <button class="button">
          <span>Question {{ position + 1 }}</span>
          <span v-if="position === 0">{{
            "." + questionNum[subPosition]
          }}</span>

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
            v-for="(question, id) in subQuestions"
            :question="question"
            :key="id"
            @click="(subPosition = id), (position = 0)"
          >
            Question {{ 1 + "." + questionNum[id] }}
          </a>

          <hr class="dropdown-divider" />
          <a class="dropdown-item" @click="position = 1"> Question 2 </a>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="content">
          <p class="title is-5">{{ questions[position] }}</p>
        </div>
        <div class="content">
          <p class="subtitle is-5" v-if="position === 0">
            {{ subQuestions[subPosition] }}
          </p>
        </div>
      </div>
    </div>

    <div class="questionOne" v-if="position === 0">
      <div class="field py-3">
        <div class="field">
          <button
            class="button is-medium is-fullwidth is-rounded"
            @click="answered1"
          >
            Not at all
          </button>
        </div>
        <div class="field">
          <button
            class="button is-medium is-fullwidth is-rounded"
            @click="answered2"
          >
            Several days
          </button>
        </div>
        <div class="field">
          <button
            class="button is-medium is-fullwidth is-rounded"
            @click="answered3"
          >
            More than half the days
          </button>
        </div>
        <div class="field">
          <button
            class="button is-medium is-fullwidth is-rounded"
            @click="answered4"
          >
            Nearly everyday
          </button>
        </div>
      </div>
    </div>
    <!-- <div class="questionTwo" v-if="position === 1"> -->
    <div class="questionTwo">
      <div class="field py-3">
        <div class="field">
          <button
            class="button is-medium is-fullwidth is-rounded"
            @click="answered1"
          >
            Not difficult at all
          </button>
        </div>
        <div class="field">
          <button
            class="button is-medium is-fullwidth is-rounded"
            @click="answered2"
          >
            Somewhat difficult
          </button>
        </div>
        <div class="field">
          <button
            class="button is-medium is-fullwidth is-rounded"
            @click="answered3"
          >
            Very difficult
          </button>
        </div>
        <div class="field">
          <button
            class="button is-medium is-fullwidth is-rounded"
            @click="answered4"
          >
            Extremely difficult
          </button>
        </div>
      </div>

      <div class="has-text-centered" v-if="optionValues.length > 9">
        <button class="button is-success is-medium" @click.once="submit">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatientHQ",

  data() {
    return {
      position: 0,

      subPosition: 0,

      title: "Patient Health Questionnaire",

      questions: [
        "1. Over the last 2 weeks, how often have you been bothered by any of the following problems?",
        "2. If you checked off any problem on the questionnaire so far, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?",
      ],

      subQuestions: [
        "a. Little interest or pleasure in doing things.",
        "b. Feeling down, depressed, or hopeless.",
        "c. Trouble falling/staying asleep, sleeping too much.",
        "d. Feeling tired or having little energy.",
        "e. Poor appetite or overeating.",
        "f. Feeling bad about yourself, or that you are a failure, or have let yourself or your family down.",
        "g. Trouble concentrating on things, such as reading the newspaper or watching TV.",
        `h. Moving or speaking so slowly that other people could have noticed.
        Or the opposite; being so fidgety or restless that you have been moving around more than usual`,
        "i. Thoughts that you would be better off dead or of hurting yourself in some way.",
      ],

      questionNum: ["a", "b", "c", "d", "e", "f", "g", "h", "i"],

      optionValues: [],
    };
  },
  methods: {
    answered1() {
      this.optionValues[this.subPosition] = 0;
      this.nextQuestion();
    },
    answered2() {
      this.optionValues[this.subPosition] = 1;
      this.nextQuestion();
    },
    answered3() {
      this.optionValues[this.subPosition] = 2;
      this.nextQuestion();
    },
    answered4() {
      this.optionValues[this.subPosition] = 3;
      this.nextQuestion();
    },
    nextQuestion() {
      if (this.subPosition < 8) {
        this.subPosition++;
      } else {
        this.subPosition = 9;
        this.position = 1;
      }
    },
    submit() {
      // Sums all the values in this array into a single value
      const newPHQScore = this.optionValues.reduce(
        (acc, curr) => acc + curr,
        0
      );

      // Save it into vuex using a mutation
      this.$store.commit("updatePHQScore", newPHQScore);
      if (newPHQScore > 4 && newPHQScore < 15) {
        this.$store.commit("pHQResults2");
      } else if (newPHQScore > 14 && newPHQScore < 20) {
        this.$store.commit("pHQResults3");
      } else if (newPHQScore > 20 || newPHQScore === 20) {
        this.$store.commit("pHQResults4");
      } else this.$store.commit("pHQResults1");

      // Change view once everything is done
      this.$router.push({ name: "results" });
    },
  },
};
</script>
