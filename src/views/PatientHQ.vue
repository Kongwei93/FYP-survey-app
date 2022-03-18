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
      <div class="content">
        <p class="subtitle is-5">{{ subQuestions[7] }}</p>
      </div>
    </div>
  </div>
  <div class="field py-3">
    <div class="field">
      <button class="button is-medium is-fullwidth" value="0">
        Not at all
      </button>
    </div>
    <div class="field">
      <button class="button is-medium is-fullwidth" value="1">
        Several days
      </button>
    </div>
    <div class="field">
      <button class="button is-medium is-fullwidth" value="2">
        More than half the days
      </button>
    </div>
    <div class="field">
      <button class="button is-medium is-fullwidth" value="3">
        Fairly Often
      </button>
    </div>
    <div class="field">
      <button class="button is-medium is-fullwidth" value="4">
        Nearly everyday
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatientHQ",

  data() {
    return {
      position: 0,

      title: "Patient Health Questionnaire",

      questions: [
        "1. Over the last 2 weeks, how often have you been bothered by any of the following problems?",
        "2. If you checked off any problem on the questionnaire so far, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?",
      ],

      subQuestions: [
        "a. Little interest or pleasure in doing things.",
        "b. Feeling down, depressed, or hopeless.",
        "c. Trouble falling/staying asleep, sleeping too much.",
        "d. Feeling tired or having little energy.",
        "e. Poor appetite or overeating.",
        "f. Feeling bad about yourself, or that you are a failure, or have let yourself or your family down.",
        "g. Trouble concentrating on things, such as reading the newspaper or watching TV.",
        `h. Moving or speaking so slowly that other people could have noticed.
         Or the opposite; being so fidgety or restless that you have been moving around more than usual`,
        "i. Thoughts that you would be better off dead or of hurting yourself in some way.",
      ],
    };
  },
};
</script>
