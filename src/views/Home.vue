<template>
  <div class="title">Hello Kong Wei</div>
  <div class="container">
    <div class="columns is-centered">
      <div class="tile is-ancestor">
        <div class="tile is-horizontal is-10">
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
                  <button class="button">Attempt Survey</button>
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
              </article>
              <div class="field has-addons">
                <p class="control">
                  <button class="button">
                    <span class="icon is-small">
                      <i class="fas fa-align-left"></i>
                    </span>
                    <span>Left</span>
                  </button>
                </p>
                <p class="control">
                  <button class="button">
                    <span class="icon is-small">
                      <i class="fas fa-align-center"></i>
                    </span>
                    <span>Center</span>
                  </button>
                </p>
                <p class="control">
                  <button class="button">
                    <span class="icon is-small">
                      <i class="fas fa-align-right"></i>
                    </span>
                    <span>Right</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <p class="title is-size-4 has-text-centered">Ces-D</p>
                <p class="subtitle is-size-3 has-text-centered">
                  {{ cesDScore }}/60
                </p>
              </article>
              <div class="field has-addons">
                <p class="control">
                  <button class="button">
                    <span class="icon is-small">
                      <i class="fas fa-align-left"></i>
                    </span>
                    <span>Left</span>
                  </button>
                </p>
                <p class="control">
                  <button class="button">
                    <span class="icon is-small">
                      <i class="fas fa-align-center"></i>
                    </span>
                    <span>Center</span>
                  </button>
                </p>
                <p class="control">
                  <button class="button">
                    <span class="icon is-small">
                      <i class="fas fa-align-right"></i>
                    </span>
                    <span>Right</span>
                  </button>
                </p>
              </div>
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
