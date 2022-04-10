import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import router from "./router";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

export default createStore({
  plugins: [createPersistedState()],
  strict: true,

  state: {
    user: null,
    stressScore: null,
    pHQScore: null,
    cesDScore: null,
    results: 0,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },

    CLEAR_USER(state) {
      state.user = null;
    },
    updateStressScore(state, newStressScore) {
      state.stressScore = newStressScore;
    },
    updatePHQScore(state, newPHQScore) {
      state.pHQScore = newPHQScore;
    },
    updateCesDScore(state, newCesDScore) {
      state.cesDScore = newCesDScore;
    },
    results(state, results) {
      state.results = results;
    },
  },
  actions: {
    async logout({ commit }) {
      await signOut(auth);

      commit("CLEAR_USER");

      router.push({ name: "login" });
    },
  },
});
