<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <img src="/nus.png" alt="NUS survey app" />
      </a>
      <a class="navbar-item py-3"><strong>NUS Wellness Survey</strong></a>
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
    </div>
  </nav>
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

<script></script>
