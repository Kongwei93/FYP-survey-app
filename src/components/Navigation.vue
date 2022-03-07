<template>
  <div class="navigation">
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="/nus.png" alt="NUS survey app" />
        </a>
        <a class="navbar-item py-3"
          ><strong>NUS Mental Health Assesment</strong></a
        >
        <a
          v-if="$store.state.user"
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
        <div class="navbar-start" v-if="$store.state.user">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Menu </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="#"> Home </a>
              <a class="navbar-item" href="#"> Survey Selection </a>

              <hr class="navbar-divider" />
              <a class="navbar-item" @click="$store.dispatch('logout')">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",

  data() {
    return {
      // Default to not mobile to ensure the icons are not added in first render before it is calculated
      isMobile: false,
      showMobileMenu: false,
    };
  },
};
</script>
