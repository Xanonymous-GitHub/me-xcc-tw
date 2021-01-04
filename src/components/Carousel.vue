<template>
  <div id="carousel-top" class="carousel carousel__top slide mx-3 rounded-3 d-inline-block rounded-3"
       data-bs-ride="carousel">
    <ol class="carousel-indicators">
      <li v-for="(_, k) in imageList" :key="k" :data-bs-slide-to="k" data-bs-target="#carousel-top"/>
    </ol>
    <div class="carousel-inner">
      <div v-for="(url, k) in imageList" :key="k" class="carousel-item">
        <img :src="url" alt="" class="d-block w-auto mw-100 mx-auto">
      </div>
    </div>

    <a v-for="(config, k) in carouseControllerConfig" :key="k" :class="'carousel-control-'+config.dataBsSlide"
       :data-bs-slide="config.dataBsSlide" href="#carousel-top" role="button">
      <span :class="'carousel-control-'+config.dataBsSlide+'-icon'" aria-hidden="true"></span>
      <span class="visually-hidden">{{ config.text }}</span>
    </a>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, onMounted, nextTick} from 'vue';
import '@/scss/components/carouse.scss'

export default defineComponent({
  name: 'Carousel',
  setup() {
    const data = reactive({
      imageList: [
        'bFcdQMh',
        'dEKDZaM',
        'JPjHtac'
      ].map((id) => 'https://i.imgur.com/' + id + '.webp'),
      carouseControllerConfig: [
        {
          text: 'Previous',
          dataBsSlide: 'prev'
        },
        {
          text: 'Next',
          dataBsSlide: 'next'
        }
      ]
    })

    onMounted(() => {
      nextTick(() => {
        const carouselItems = document.querySelectorAll('.carousel-item') as unknown as Array<HTMLDivElement>
        if (carouselItems.length > 0) {
          carouselItems[0].classList.add('active')
        }

        const carouselIndicators = (document.querySelector('.carousel-indicators') as unknown as HTMLElement).children as unknown as Array<HTMLOListElement>
        if (carouselIndicators.length > 0) {
          carouselIndicators[0].classList.add('active')
        }
      })
    })

    return {
      ...toRefs(data)
    }
  }
});
</script>
