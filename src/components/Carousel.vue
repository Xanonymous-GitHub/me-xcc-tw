<template>
  <div id="carousel-top" class="carousel carousel__top slide mx-3 rounded-3 d-inline-block" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img alt="..." class="d-block w-auto mw-100 mx-auto" src="https://i.imgur.com/bFcdQMh.webp">
      </div>
      <div class="carousel-item">
        <img alt="..." class="d-block w-auto mw-100 mx-auto" src="https://i.imgur.com/dEKDZaM.webp">
      </div>
      <div class="carousel-item">
        <img alt="..." class="d-block w-auto mw-100 mx-auto" src="https://i.imgur.com/JPjHtac.webp">
      </div>
    </div>
    <a class="carousel-control-prev" data-bs-slide="prev" href="#carousel-top" role="button">
      <span aria-hidden="true" class="carousel-control-prev-icon"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next" data-bs-slide="next" href="#carousel-top" role="button">
      <span aria-hidden="true" class="carousel-control-next-icon"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/scss/components/carouse.scss'

export default defineComponent({
  name: 'Carousel',
  setup() {
    return
  }
});
</script>
