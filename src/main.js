// import "bulma";
// Load bulma styles in the main entry point
import "bulma/css/bulma.min.css";

import { createApp } from "vue";
import router from "./router.js";
import store from "./store.js";
import App from "./App.vue";
import Navi from "./components/Navigation.vue";
import Readmore from "./components/Readmore.vue";
import Surveycard from "./components/Surveycard.vue";

createApp(App)
  .use(router)
  .use(store)
  .component("Navi", Navi)
  .component("Readmore", Readmore)
  .component("Surveycard", Surveycard)
  .mount("#app");
