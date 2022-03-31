import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import router from "./router";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default createStore({
  plugins: [createPersistedState()],
  strict: true,

  state: {
    user: null,
    stressScore: 0,
    pHQScore: 0,
    cesDScore: 0,
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
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("User not found");
            break;
          case "auth/wrong-password":
            alert("Password is incorrect");
            break;
          default:
            alert("something went wrong");
        }

        return;
      }

      commit("SET_USER", auth.currentUser);

      router.push("/");
    },

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
