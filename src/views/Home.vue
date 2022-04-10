<template>
  <div class="title">Hello Kong Wei</div>
  <div class="container">
    <div class="columns is-centered">
      <div class="tile is-ancestor">
        <div class="tile is-horizontal">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <p class="title is-size-4 has-text-centered">
                  Perceived Stress Scale
                </p>
                <p class="subtitle is-size-3 has-text-centered">
                  {{ stressScore }}/40
                </p>
                <div class="buttons is-centered">
                  <button
                    class="button"
                    @click="$router.push({ name: 'perceivedss' })"
                  >
                    Attempt Survey
                  </button>
                  <button class="button">Results</button>
                </div>
              </article>
            </div>
          </div>
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <p class="title is-size-4 has-text-centered">
                  Patient Health Questionnaire
                </p>
                <p class="subtitle is-size-3 has-text-centered">
                  {{ pHQScore }}/30
                </p>
                <div class="buttons is-centered">
                  <button
                    class="button"
                    @click="$router.push({ name: 'patienthq' })"
                  >
                    Attempt Survey
                  </button>
                  <button class="button">Results</button>
                </div>
              </article>
            </div>
          </div>
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <p class="title is-size-4 has-text-centered">
                  CES Depression Scale
                </p>
                <p class="subtitle is-size-3 has-text-centered">
                  {{ cesDScore }}/60
                </p>
                <div class="buttons is-centered">
                  <button
                    class="button"
                    @click="$router.push({ name: 'cesd' })"
                  >
                    Attempt Survey
                  </button>
                  <button class="button">Results</button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

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
  },
};
</script>
