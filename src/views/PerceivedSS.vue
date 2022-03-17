<template>
  <template>
    <div class="title">test</div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">Question 1</p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div class="card-content">
        <div class="content">
          <p class="title is-5">question here</p>
        </div>
      </div>
    </div>
    <div class="field py-3">
      <div class="field">
        <button class="button is-medium is-fullwidth" value="0">Never</button>
      </div>
      <div class="field">
        <button class="button is-medium is-fullwidth" value="1">
          Almost Never
        </button>
      </div>
      <div class="field">
        <button class="button is-medium is-fullwidth" value="2">
          Sometimes
        </button>
      </div>
      <div class="field">
        <button class="button is-medium is-fullwidth" value="3">
          Fairly Often
        </button>
      </div>
      <div class="field">
        <button class="button is-medium is-fullwidth" value="4">Often</button>
      </div>
    </div>
  </template>
</template>

<script>
export default {
  name: "PerceivedSS",

  data() {
    return {
      PSS: [
        {
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
        },
      ],
    };
  },
};
</script>
