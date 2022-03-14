<template>
  <div class="navi">
    <nav class="navbar is-fixed-top">
      <div class="navbar-brand">
        <p class="navbar-item">
          <img src="/nus.png" alt="NUS survey app" />
        </p>
        <p class="navbar-item py-3">
          <strong>NUS Mental Health Assesment</strong>
        </p>
        <button
          v-if="$router.view === terms"
          class="button is-right"
          @click="$router.push({ name: 'register' })"
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

      <div
        id="navbarMenu"
        class="navbar-menu"
        :class="{ 'is-active': showMenu }"
      >
        <div class="navbar-start" v-if="$store.state.user">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Menu </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="#"> Home </a>
              <a class="navbar-item" href="#"> Survey Selection </a>

              <hr class="navbar-divider" />
              <a class="navbar-item" @click="logout"> Logout </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
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
};
</script>
