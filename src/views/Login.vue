<template>
  <article class="message is-large">
    <div class="message-header">
      <p>Wellness Survey App</p>
    </div>
  </article>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form action="" class="box">
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input
                  type="email"
                  placeholder="e.g. bobsmith@gmail.com"
                  class="input"
                  required
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
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="checkbox">
                <input type="checkbox" />
                Remember me
              </label>
            </div>
            <div class="field">
              <button class="button is-success">Login</button>
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
