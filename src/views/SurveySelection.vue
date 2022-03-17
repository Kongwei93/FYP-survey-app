<template>
  <div class="columns is-multiline is-centered">
    <Surveycard v-for="(survey, id) in surveys" :survey="survey" :key="id" />
  </div>
</template>

<script>
import Surveycard from "../components/Surveycard.vue";

export default {
  name: "SurveySelection",

  components: { Surveycard },

  data() {
    return {
      surveys: [
        {
          title: "Perceived Stress Scale",

          text: `The Perceived Stress Scale (PSS) is the most widely used psychological instrument for measuring the perception of
stress. It is a measure of the degree to which situations in one’s life are appraised as stressful. Items were designed to
tap how unpredictable, uncontrollable, and overloaded respondents find their lives. The scale also includes a number of
direct queries about current levels of experienced stress. The PSS was designed for use in community samples with at
least a junior high school education. The items are easy to understand, and the response alternatives are simple to grasp.
Moreover, the questions are of a general nature and hence are relatively free of content specific to any subpopulation
group. The questions in the PSS ask about feelings and thoughts during the last month. In each case, respondents are
asked how often they felt a certain way.`,
          link: "#/perceivedss",
        },
        {
          title: "Another survey",

          text: `Lorem ipsum`,
        },
      ],
    };
  },
};
</script>
