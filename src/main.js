// import "bulma";
// Load bulma styles in the main entry point
import "bulma/css/bulma.min.css";

import { createApp } from "vue";
import router from "./router.js";
import store from "./store.js";
import App from "./App.vue";
import Navigation from "./components/Navigation.vue";

createApp(App)
  .use(router)
  .use(store)
  .component("Navigation", Navigation)
  .mount("#app");
