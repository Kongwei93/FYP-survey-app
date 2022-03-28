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
        <p class="title is-5">During the past week</p>
        <p class="subtitle is-5">{{ questions[position] }}</p>
      </div>
    </div>
  </div>

  <div class="field py-3">
    <div class="field">
      <button
        class="button is-medium is-fullwidth is-rounded"
        @click="answered1"
      >
        Rarely (less than 1 day)
      </button>
    </div>
    <div class="field">
      <button
        class="button is-medium is-fullwidth is-rounded"
        @click="answered2"
      >
        Sometimes (1-2 days)
      </button>
    </div>
    <div class="field">
      <button
        class="button is-medium is-fullwidth is-rounded"
        @click="answered3"
      >
        Occasionally (3-4 days)
      </button>
    </div>
    <div class="field">
      <button
        class="button is-medium is-fullwidth is-rounded"
        @click="answered4"
      >
        Mostly (5-6 days)
      </button>
    </div>
  </div>
  <div class="has-text-centered" v-if="optionValues.length > 19">
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

      title: "CES-D",

      questions: [
        `I was bothered by things that ususally don't bother me.`,
        `I did not feel like eating; my appetite was poor.`,
        `I felt that I could not shake off the blues even with help from my family or friends.`,
        `I felt i was just as good as other people.`,
        `I had trouble keeping my mind on what I was doing.`,
        `I felt depressed.`,
        `I felt that everything I did was an effort.`,
        `I felt hopeful about the future.`,
        `I though my life had been a failure.`,
        `I felt fearful.?`,
        `My sleep was restless.`,
        `I was happy.`,
        `I talked less than usual.`,
        `I felt lonely.`,
        `People were unfriendly.`,
        `I enjoyed life.`,
        `I had crying spells.`,
        `I felt sad.`,
        `I felt that people dislike me.`,
        `I could not get "going".`,
      ],
      optionValues: [],
    };
  },
  methods: {
    answered1() {
      if (
        this.position === 4 ||
        this.position === 8 ||
        this.position === 12 ||
        this.position === 16
      ) {
        this.optionValues[this.position] = 3;
      } else {
        this.optionValues[this.position] = 0;
      }

      this.nextQuestion();
    },
    answered2() {
      if (
        this.position === 4 ||
        this.position === 8 ||
        this.position === 12 ||
        this.position === 16
      ) {
        this.optionValues[this.position] = 2;
      } else {
        this.optionValues[this.position] = 1;
      }

      this.nextQuestion();
    },
    answered3() {
      if (
        this.position === 4 ||
        this.position === 8 ||
        this.position === 12 ||
        this.position === 16
      ) {
        this.optionValues[this.position] = 1;
      } else {
        this.optionValues[this.position] = 2;
      }
      this.nextQuestion();
    },
    answered4() {
      if (
        this.position === 4 ||
        this.position === 8 ||
        this.position === 12 ||
        this.position === 16
      ) {
        this.optionValues[this.position] = 0;
      } else {
        this.optionValues[this.position] = 3;
      }

      this.nextQuestion();
    },

    nextQuestion() {
      if (this.position < 19) {
        this.position++;
      }
    },
  },
};
</script>
