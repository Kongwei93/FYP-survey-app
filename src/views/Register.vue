<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form class="register" @submit.prevent="register">
            <div class="field">
              <label for="" class="label">Name</label>

              <input
                type="text"
                placeholder="e.g. Bob Smith"
                class="input"
                required
              />
            </div>
            <div class="field">
              <label for="" class="label">Age</label>

              <input
                type="number"
                placeholder="e.g. 21"
                class="input"
                required
              />
            </div>
            <div class="field">
              <label for="" class="label">Email</label>

              <input
                type="email"
                placeholder="e.g. bobsmith@gmail.com"
                class="input"
                required
                v-model="register_form.email"
              />
            </div>
            <div class="field">
              <label for="" class="label">Password</label>

              <input
                type="password"
                placeholder="*******"
                class="input"
                required
                v-model="register_form.password"
              />
            </div>
            <!-- <div class="field">
              <label for="" class="label">Confirm Password</label>

              <input
                type="password"
                placeholder="*******"
                class="input"
                required
              />
            </div> -->
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" />
                  I agree to the <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <input type="submit" value="Register" class="button is-link" />
              </div>
              <div class="control">
                <button class="button is-link is-light">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const register_form = ref({});
    const store = useStore();

    const register = () => {
      store.dispatch("register", register_form.value);
    };

    return { register_form, register };
  },
};
</script>
