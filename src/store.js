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
    pHQResults(state, results) {
      state.results = results;
    },
    pHQResults1(state) {
      state.results = 1;
    },
    pHQResults2(state) {
      state.results = 2;
    },
    pHQResults3(state) {
      state.results = 3;
    },
    pHQResults4(state) {
      state.results = 4;
    },
    stressResults1(state) {
      state.results = 5;
    },
    stressResults2(state) {
      state.results = 6;
    },
    stressResults3(state) {
      state.results = 7;
    },
    cesDResults1(state) {
      state.results = 8;
    },
    cesDResults2(state) {
      state.results = 9;
    },
    cesDResults3(state) {
      state.results = 10;
    },
    cesDResults4(state) {
      state.results = 11;
    },
    cesDResults5(state) {
      state.results = 12;
    },
  },
  actions: {
    async register({ commit }, { email, password, name, age }) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        commit("SET_USER", auth.currentUser);
        router.push("/");
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("Email already in use");
            break;
          case "auth/invalid-email":
            alert("Invalid email");
            break;
          case "auth/operation-not-allowed":
            alert("Operation not allowed");
            break;
          case "auth/weak-password":
            alert("Weak password");
            break;
          default:
            alert("something went wrong");
        }

        return;
      }
    },

    async logout({ commit }) {
      await signOut(auth);

      commit("CLEAR_USER");

      router.push("/login");
    },
  },
});
