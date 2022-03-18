<template>
  <div class="title">{{ title }}</div>
  <div class="card">
    <div class="dropdown">
      <div class="dropdown-trigger">
        <button
          class="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu3"
        >
          <span>Questions</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu3" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item"> Overview </a>
          <a href="#" class="dropdown-item"> Modifiers </a>
          <a href="#" class="dropdown-item"> Grid </a>
          <a href="#" class="dropdown-item"> Form </a>
          <a href="#" class="dropdown-item"> Elements </a>
          <a href="#" class="dropdown-item"> Components </a>
          <a href="#" class="dropdown-item"> Layout </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item"> More </a>
        </div>
      </div>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="title is-5">{{ questions[0] }}</p>
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
      <button class="button is-medium is-fullwidth" value="2">Sometimes</button>
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

<script>
export default {
  name: "PerceivedSS",

  data() {
    return {
      position: 0,

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
    };
  },
};
</script>
