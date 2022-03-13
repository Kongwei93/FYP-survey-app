<template>
  <div>
    <Navi />
    <router-view />
  </div>
</template>

<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
import Navi from "./components/Navigation.vue";

export default {
  components: { Navi },

  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
</style>
