<template>
  <nav class="navbar is-fixed-top" role="navigation">
    <div class="navbar-brand">
      <p class="navbar-item">
        <img src="/nus.png" alt="NUS survey app" />
      </p>
      <p class="navbar-item py-3">
        <strong>NUS Mental Health Assesment</strong>
      </p>
      <button
        class="button is-responsive"
        @click="$router.push({ name: 'register' })"
        v-if="isTerms"
      >
        back
      </button>

      <a
        v-if="$store.state.user"
        role="button"
        class="navbar-burger"
        aria-label="menu"
        data-target="navbarMenu"
        @click="showMenu = !showMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarMenu" class="navbar-menu" :class="{ 'is-active': showMenu }">
      <div class="navbar-start" v-if="$store.state.user">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Menu </a>
          <div class="navbar-dropdown is-boxed">
            <a
              class="navbar-item"
              @click="(showMenu = !showMenu), $router.push({ name: 'home' })"
            >
              Home
            </a>
            <a
              class="navbar-item"
              @click="
                (showMenu = !showMenu),
                  $router.push({ name: 'surveyselection' })
              "
            >
              Survey Selection
            </a>

            <hr class="navbar-divider" />
            <a class="navbar-item" @click="logout"> Logout </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navi",

  data() {
    return {
      showMenu: false,
    };
  },

  methods: {
    logout() {
      this.showMenu = false;

      this.$store.dispatch("logout");
    },
  },
  computed: {
    isTerms() {
      return this.$route.name === "terms";
    },
  },
};
</script>
