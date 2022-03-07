<template>
  <div class="columns is-multiline is-centered">
    <div class="column is-4">
      <a href="/register">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img
                loading="lazy"
                src="https://api.time.com/wp-content/uploads/2018/11/stress-benefits.jpg?w,800,quality,85"
                alt="Perceived Stress Scale"
              />
            </figure>
          </div>
          <div class="card-content">
            <p class="title is-5">Perceived Stress Scale</p>
            <p class="subtitle is-6">
              <Readmore></Readmore>
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import Readmore from "../components/Readmore.vue";

export default {
  components: Readmore,
};
</script>
