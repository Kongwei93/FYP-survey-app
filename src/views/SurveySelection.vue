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
          direct queries about current levels of experienced stress.  The questions in the PSS ask about feelings and thoughts during the 
          last month. In each case, respondents areasked how often they felt a certain way.`,

          link: "#/perceivedss",

          image: "stress-benefits.jpg",
        },
        {
          title: "Patient Health Questionnaire",

          text: `The Patient Health Questionnaire 9 (PHQ-9) is one of the tools used to screen for the presence and severity 
          of depression and to monitor response to treatment. This is not intended to provide a diagnosis, but acts as a primary 
          assesment tool for users. All diagnosis should only be provided by a trained health professional.`,

          link: "#/patienthq",

          image: "PHQ.jpg",
        },
      ],
    };
  },
};
</script>
