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
        :class="{ 'is-active': showMobileMenu }"
        aria-label="menu"
        data-target="navbarMenu"
        @click="showMobileMenu = !showMobileMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarMenu"
      class="navbar-menu"
      :class="{ 'is-active': showMobileMenu }"
    >
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Menu </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href=""> Home </a>
            <a class="navbar-item" href="#/surveyselection">
              Survey Selection
            </a>

            <hr class="navbar-divider" />
            <a class="navbar-item" @click="$store.dispatch('logout')">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="columns is-multiline is-centered">
    <div class="column is-4">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img
              loading="lazy"
              src="data:image/jpeg;base64,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"
              alt="Perceived Stress Scale"
            />
          </figure>
        </div>
        <div class="card-content">
          <p class="title">Perceived Stress Scale</p>
          <p class="subtitle">
            <!-- <readmore></readmore> -->
          </p>
        </div>
      </div>
    </div>
    <div class="column is-3">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img loading="lazy" src="/img/0.4174f922.jpg" alt="Mochi" />
          </figure>
        </div>
        <div class="card-content">
          <p class="title">Mochi</p>
          <p class="subtitle">French Bulldog</p>
        </div>
      </div>
    </div>
    <div class="column is-3">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img loading="lazy" src="/img/10.530f0a3b.jpg" alt="Gus" />
          </figure>
        </div>
        <div class="card-content">
          <p class="title">Gus</p>
          <p class="subtitle">Pug</p>
        </div>
      </div>
    </div>
    <div class="column is-3">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img loading="lazy" src="/img/11.85a175f8.jpg" alt="Kellog" />
          </figure>
        </div>
        <div class="card-content">
          <p class="title">Kellog</p>
          <p class="subtitle">Black Cockapoo</p>
        </div>
      </div>
    </div>
    <div class="column is-3">
      <div class="card">
        <div class="card-content">
          <p class="title" style="color: lightcoral">
            Want to have your own puppy?
          </p>
          <a
            href="https://booking.ministryofpup.com"
            target="_blank"
            class="button is-fullwidth"
            style="background: lightcoral; color: white"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </div>
    <div class="column is-3">
      <div class="card">
        <div class="card-content">
          <p class="title" style="color: lightcoral">
            Have a special dog you want?
          </p>
          <a
            href="#ContactUs"
            class="button is-fullwidth"
            style="background: lightcoral; color: white"
          >
            Tell us now!
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Default to not mobile to ensure the icons are not added in first render before it is calculated
      isMobile: false,
      showMobileMenu: false,
    };
  },
};
</script>
