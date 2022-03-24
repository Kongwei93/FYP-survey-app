<template>
  <div class="title">{{ title }}</div>
  <div class="dropdown is-hoverable">
    <div class="dropdown-trigger">
      <button class="button">
        <span>Question {{ position + 1 }}</span>
        <span v-if="position === 0">{{ "." + questionNum[subPosition] }}</span>

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
  <div class="field py-3">
    <div class="field">
      <button class="button is-medium is-fullwidth" value="0" @click="answered">
        Never
      </button>
    </div>
    <div class="field">
      <button class="button is-medium is-fullwidth" value="1" @click="answered">
        Almost Never
      </button>
    </div>
    <div class="field">
      <button class="button is-medium is-fullwidth" value="2" @click="answered">
        Sometimes
      </button>
    </div>
    <div class="field">
      <button class="button is-medium is-fullwidth" value="3" @click="answered">
        Fairly Often
      </button>
    </div>
    <div class="field">
      <button class="button is-medium is-fullwidth" value="4" @click="answered">
        Often
      </button>
    </div>
  </div>
  <div class="has-text-centered" v-if="position === 1">
    <button class="button is-success is-medium">Submit</button>
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
    };
  },
  methods: {
    answered() {
      if (this.subPosition < 8) {
        this.subPosition++;
      } else {
        this.position = 1;
      }
    },
  },
};
</script>
