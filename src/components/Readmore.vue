<template>
  <div>
    <span v-if="!readMoreActivated">{{ longText.slice(0, 200) }} </span>
    <a class="" v-if="!readMoreActivated" @click="activateReadMore" href="#">
      Read more...
    </a>
    <span v-if="readMoreActivated" v-html="longText"></span>
  </div>
</template>
<script>
export default {
  name: "Readmore",
  data() {
    return {
      longText: `The Perceived Stress Scale (PSS) is the most widely used psychological instrument for measuring the perception of
stress. It is a measure of the degree to which situations in one’s life are appraised as stressful. Items were designed to
tap how unpredictable, uncontrollable, and overloaded respondents find their lives. The scale also includes a number of
direct queries about current levels of experienced stress. The PSS was designed for use in community samples with at
least a junior high school education. The items are easy to understand, and the response alternatives are simple to grasp.
Moreover, the questions are of a general nature and hence are relatively free of content specific to any subpopulation
group. The questions in the PSS ask about feelings and thoughts during the last month. In each case, respondents are
asked how often they felt a certain way.`,
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
