<template>
  <div class="title">{{ title }}</div>
  <div class="dropdown is-hoverable" :class="{ 'is-active': showQuestions }">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Question List</span>
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
          @click="(position = id), (showQuestions = false)"
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
  <div class="has-text-centered" v-if="position === 9">
    <button class="button is-success is-medium">Submit</button>
  </div>
</template>

<script>
export default {
  name: "PerceivedSS",

  data() {
    return {
      position: 0,

      showQuestions: false,

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
      optionValue: [{}],
    };
  },
  methods: {
    answered() {
      if (this.position < 9) {
        this.position++;
      }
    },
  },
};
</script>
