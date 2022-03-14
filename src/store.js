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
