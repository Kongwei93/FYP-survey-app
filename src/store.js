import { createStore } from "vuex";

const getRecaptchaToken = async (action) =>
  new Promise((resolve, reject) =>
    grecaptcha.ready(() =>
      grecaptcha
        .execute("6Lcex6QcAAAAADus4RtnoqwskQoXcB2DwgCav11Z", { action })
        .then(resolve)
        .catch(reject)
    )
  );

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },

    CLEAR_USER(state) {
      state.user = null;
    },
  },
  actions: {
    async login({ commit }, details) {
      //todo
    },

    async register({ commit }, details) {
      //todo
    },

    async logout({ commit }) {
      //todo
    },
  },
});
