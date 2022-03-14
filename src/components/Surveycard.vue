<template>
  <div class="column is-4">
    <a href="#">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img
              loading="lazy"
              src="/stress-benefits.jpg"
              alt="Perceived Stress Scale"
            />
          </figure>
        </div>
        <div class="card-content">
          <p class="title is-5">{{ survey.title }}</p>
          <div class="subtitle is-6">
            <div>
              <span v-if="!readMoreActivated"
                >{{ survey.text.slice(0, 200) }}
              </span>
              <a
                class=""
                v-if="!readMoreActivated"
                @click="activateReadMore"
                href="#"
              >
                Read more...
              </a>
              <span v-if="readMoreActivated" v-html="survey.text"></span>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Surveycard",

  props: ["survey"],

  data() {
    return {
      readMoreActivated: false,
    };
  },

  methods: {
    activateReadMore() {
      this.readMoreActivated = true;
    },
  },
};
</script>
