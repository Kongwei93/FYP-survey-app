<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column">
          <form class="register" @submit.prevent="register">
            <div class="field">
              <label for="" class="label">Name</label>

              <input
                type="text"
                placeholder="e.g. Bob Smith"
                class="input"
                required
                v-model="name"
              />
            </div>
            <div class="field">
              <label for="" class="label">Age</label>

              <input
                type="number"
                placeholder="e.g. 21"
                class="input"
                required
                v-model="age"
              />
            </div>
            <div class="field">
              <label for="" class="label">Email</label>

              <input
                type="email"
                placeholder="e.g. bobsmith@gmail.com"
                class="input"
                required
                v-model="email"
              />
            </div>
            <div class="field">
              <label for="" class="label">Password</label>

              <input
                type="password"
                placeholder="*******"
                class="input"
                required
                v-model="password"
              />
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" v-model="agreeToTerms" />
                  I agree to the
                  <router-link :to="{ name: 'terms' }">
                    Terms & Conditions
                  </router-link>
                </label>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <input type="submit" value="Register" class="button is-link" />
              </div>
              <div class="control">
                <button
                  class="button is-link is-light"
                  @click="$router.push({ name: 'login' })"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default {
  name: "Register",

  data() {
    return {
      name: undefined,
      age: undefined,
      email: undefined,
      password: undefined,
      agreeToTerms: false,
    };
  },

  methods: {
    async register() {
      if (this.agreeToTerms === false) return alert("Please agree to terms");

      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        this.$store.commit("SET_USER", auth.currentUser);
        this.$router.push({ name: "home" });
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
  },
};
</script>
