<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <img src="/nus.png" alt="NUS survey app" />
      </a>
      <a class="navbar-item py-3" href="#"
        ><strong>NUS Wellness Survey App</strong></a
      >
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarMenu" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Menu </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href=""> Home </a>
            <a class="navbar-item" href="#/surveyselection">
              Survey Selection
            </a>

            <hr class="navbar-divider" />
            <a class="navbar-item" href=""> Logout </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item"></div>
      </div>
    </div>
  </nav>
  <div class="message-body is-success">
    Each survey consist of a set of questions to determine your mental health
    wellness. Click into each survey to view the full description of each
    survey.
  </div>
  <div class="field px-2">
    <button class="button is-primary is-large is-fullwidth is-light">
      Perceived Stress Scale
    </button>
  </div>
  <div class="field px-2">
    <button class="button is-primary is-large is-fullwidth is-light">
      Mini Mental State Examination
    </button>
  </div>
  <div class="field px-2">
    <button class="button is-primary is-large is-fullwidth is-light">
      Patient Health Examination
    </button>
  </div>
</template>

<script>
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
</script>
