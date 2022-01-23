<template>
  <article class="message is-large">
    <div class="message-header">
      <p>Registration</p>
    </div>
  </article>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form action="" class="box">
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
              />
            </div>
            <div class="field">
              <label for="" class="label">Password</label>

              <input
                type="password"
                placeholder="*******"
                class="input"
                required
              />
            </div>
            <div class="field">
              <label for="" class="label">Confirm Password</label>

              <input
                type="password"
                placeholder="*******"
                class="input"
                required
              />
            </div>
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
                <button class="button is-link">Submit</button>
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
