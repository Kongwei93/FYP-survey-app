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
  name: "CesD",

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
    // major_depressive_episode2() {
    //   // New array for dysphoria anhedonia
    //   // Continue if any of the value is equals to 4
    //   if (
    //     [
    //       this.optionValues[1],
    //       this.optionValues[3],
    //       this.optionValues[5],
    //       this.optionValues[7],
    //       this.optionValues[9],
    //     ].some((val) => val === 4)
    //   ) {
    //     const numberOfSymptoms = [
    //       this.appetite,
    //       this.sleep,
    //       this.thinking,
    //       this.guilt,
    //       this.tired,
    //       this.movement,
    //       this.suicidal,
    //     ]
    //       .map((array) => array.some((val) => val === 4))
    //       .reduce((acc, cur) => (acc + cur ? 1 : 0), 0);

    //     // If it is rly bad cos 4 symptoms or more than update vuex
    //     if (numberOfSymptoms > 3) this.$store.commit("pHQResults", "rly bad");
    //   }
    // },

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
        this.optionValues[1],
        this.optionValues[3],
        this.optionValues[5],
      ];
      this.anhedonia = [this.optionValues[7], this.optionValues[9]];
      this.appetite = [this.optionValues[0], this.optionValues[17]];
      this.sleep = [
        this.optionValues[4],
        this.optionValues[10],
        this.optionValues[18],
      ];
      this.thinking = [this.optionValues[2], this.optionValues[19]];
      this.guilt = [this.optionValues[8], this.optionValues[16]];
      this.tired = [this.optionValues[6], this.optionValues[15]];
      this.movement = [this.optionValues[11], this.optionValues[12]];
      this.suicidal = [this.optionValues[13], this.optionValues[14]];
      if (
        [
          this.optionValues[1],
          this.optionValues[3],
          this.optionValues[5],
          this.optionValues[7],
          this.optionValues[9],
        ].some((val) => val === 3)
      ) {
        /* Test for part 1 */
        const numberOfSymptoms = [
          this.appetite.some((val) => val === 3),
          this.sleep.some((val) => val === 3),
          this.thinking.some((val) => val === 3),
          this.guilt.some((val) => val === 3),
          this.tired.some((val) => val === 3),
          this.movement.some((val) => val === 3),
          this.suicidal.some((val) => val === 3),
        ].reduce((acc, cur) => acc + cur, 0);

        if (numberOfSymptoms > 3) {
          this.$store.commit("cesDResults5");
        } else {
          const numberOfSymptoms = [
            this.appetite.some((val) => val > 2),
            this.sleep.some((val) => val > 2),
            this.thinking.some((val) => val > 2),
            this.guilt.some((val) => val > 2),
            this.tired.some((val) => val > 2),
            this.movement.some((val) => val > 2),
            this.suicidal.some((val) => val > 2),
          ].reduce((acc, cur) => acc + cur, 0);

          if (numberOfSymptoms > 2) {
            this.$store.commit("cesDResults4");
          } else if (numberOfSymptoms > 1) {
            this.$store.commit("cesDResults3");
          }
        }
      } else if (newCesDScore > 15) {
        this.$store.commit("cesDResults2");
      } else {
        this.$store.commit("cesDResults1");
      }

      this.$store.commit("updateCesDScore", newCesDScore);

      this.$router.push({ name: "results" });
    },
  },
};
</script>
