<template>
  <div>
    <Navi />
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import Navi from "./components/Navigation.vue";

export default {
  components: { Navi },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  padding-top: 65px;
}

/* Color input pink if it is invalid --> e.g. when telephone number does not match the specified pattern */
/* Will only activate if the placeholder is not currently being shown, meaning will not show before user type anything */
input:not(:placeholder-shown):invalid {
  background-color: lightpink;
}

/* Shared style class used by Cancel.vue and Reschedule.vue */
.centered {
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
