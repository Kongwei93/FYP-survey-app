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
        <!-- <p class="subtitle is-5">{{ questions[position] }}</p> -->
        <p class="subtitle is-5" v-html="questions[position]"></p>
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
        `I was bothered <br /> by things that ususally don't bother me.`,
        `I did not feel like eating; my appetite was poor.`,
        `I felt that I could not shake off the blues even with help from my family or friends.`,
        `I felt i was just as good as other people.`,
        `I had trouble keeping my mind on what I was doing.`,
        `I felt depressed.`,
        `I felt that everything I did was an effort.`,
        `I felt hopeful about the future.`,
        `I though my life had been a failure.`,
        `I felt fearful.`,
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
      dysphoria: [],
      anhedonia: [],
      appetite: [],
      sleep: [],
      thinking: [],
      guilt: [],
      tired: [],
      movement: [],
      suicidal: [],
    };
  },
  methods: {
    major_depressive_episode() {
      // New array for dysphoria anhedonia
      // Continue if any of the value is equals to 4
      if (
        [
          this.optionValues[1],
          this.optionValues[3],
          this.optionValues[5],
          this.optionValues[7],
          this.optionValues[9],
        ].some((val) => val === 4)
      ) {
        /* Test for part 1 */
        const numberOfSymptoms = [
          this.appetite.some((val) => val === 4),
          this.sleep.some((val) => val === 4),
          this.thinking.some((val) => val === 4),
          this.guilt.some((val) => val === 4),
          this.tired.some((val) => val === 4),
          this.movement.some((val) => val === 4),
          this.suicidal.some((val) => val === 4),
        ].reduce((acc, cur) => (acc + cur ? 1 : 0), 0);

        if (numberOfSymptoms > 3) this.$store.commit("pHQResults", "rly bad");

        /* Test for Part 2 */

        /* Test for Part 3 */
      }
    },

    major_depressive_episode2() {
      // New array for dysphoria anhedonia
      // Continue if any of the value is equals to 4
      if (
        [
          this.optionValues[1],
          this.optionValues[3],
          this.optionValues[5],
          this.optionValues[7],
          this.optionValues[9],
        ].some((val) => val === 4)
      ) {
        const numberOfSymptoms = [
          this.appetite,
          this.sleep,
          this.thinking,
          this.guilt,
          this.tired,
          this.movement,
          this.suicidal,
        ]
          .map((array) => array.some((val) => val === 4))
          .reduce((acc, cur) => (acc + cur ? 1 : 0), 0);

        // If it is rly bad cos 4 symptoms or more than update vuex
        if (numberOfSymptoms > 3) this.$store.commit("pHQResults", "rly bad");
      }
    },

    answered1() {
      if (
        this.position === 3 ||
        this.position === 7 ||
        this.position === 11 ||
        this.position === 15
      ) {
        this.optionValues[this.position] = 3;
      } else {
        this.optionValues[this.position] = 0;
      }

      this.nextQuestion();
    },
    answered2() {
      if (
        this.position === 3 ||
        this.position === 7 ||
        this.position === 11 ||
        this.position === 15
      ) {
        this.optionValues[this.position] = 2;
      } else {
        this.optionValues[this.position] = 1;
      }

      this.nextQuestion();
    },
    answered3() {
      if (
        this.position === 3 ||
        this.position === 7 ||
        this.position === 11 ||
        this.position === 15
      ) {
        this.optionValues[this.position] = 1;
      } else {
        this.optionValues[this.position] = 2;
      }
      this.nextQuestion();
    },
    answered4() {
      if (
        this.position === 3 ||
        this.position === 7 ||
        this.position === 11 ||
        this.position === 15
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
    submit() {
      // Sums all the values in this array into a single value
      const newCesDScore = this.optionValues.reduce(
        (acc, curr) => acc + curr,
        0
      );
      this.dysphoria = [
        this.optionsValues[1],
        this.optionValues[3],
        this.optionValues[5],
      ];
      this.anhedonia = [this.optionValues[7], this.optionValues[9]];
      this.appetite = [this.optionsValues[0], this.optionsValues[17]];
      this.sleep = [
        this.optionsValues[4],
        this.optionsValues[10],
        this.optionsValues[18],
      ];
      this.thinking = [this.optionsValues[2], this.optionsValues[19]];
      this.guilt = [this.optionsValues[8], this.optionsValues[16]];
      this.tired = [this.optionsValues[6], this.optionsValues[15]];
      this.movement = [this.optionsValues[11], this.optionsValues[12]];
      this.suicidal = [this.optionsValues[13], this.optionsValues[14]];

      // dysphoria.some((x) => x == 4);
      // anhedonia.some((x) => x == 4);
      // appetite.some((x) => x == 4);
      // sleep.some((x) => x == 4);
      // thinking.some((x) => x == 4);
      // guilt.some((x) => x == 4);
      // tired.some((x) => x == 4);
      // movement.some((x) => x == 4);
      // suicidal.some((x) => x == 4);

      // Save it into vuex using a mutation
      // this.$store.commit("updateCesDScore", newCesDScore);
      // if (this.anhedonia === true || this.dysphoria === true) {
      //   //include depression category checks
      // } else if (newCesDScore > 15) this.$store.commit("cesDResults2");
      // else this.$store.commit("cesDResults1");
      // // Change view once everything is done
      // this.$router.push({ name: "results" });
    },
  },
};
</script>
