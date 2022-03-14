<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form class="login" @submit.prevent="login">
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input
                  type="email"
                  placeholder="e.g. bobsmith@gmail.com"
                  class="input"
                  required
                  v-model="email"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input
                  type="password"
                  placeholder="*******"
                  class="input"
                  required
                  v-model="password"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <input type="submit" value="Login" class="button is-link" />
            </div>
            <div class="field">
              <h6 class="subtitle is-6">
                Not registered yet?
                <router-link :to="{ name: 'register' }">
                  Register Here
                </router-link>
              </h6>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      email: undefined,
      password: undefined,
    };
  },

  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
