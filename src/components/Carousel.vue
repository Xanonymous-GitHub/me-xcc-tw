<template>
  <div id="carousel-top"
       class="carousel carousel__top slide mx-3 rounded-3 d-inline-block rounded-3 my-3 my-sm-3 shadow"
       data-bs-ride="carousel">
    <ol class="carousel-indicators">
      <li v-for="(_, k) in imageList" :key="k" :data-bs-slide-to="k" data-bs-target="#carousel-top"/>
    </ol>
    <div class="carousel-inner rounded-3">
      <div v-for="(url, k) in imageList" :key="k" class="carousel-item">
        <LazyImg :d-src="url" :force-load="forceLoad[k]" class="carousel-img d-block w-auto mw-100 mx-auto rounded-3"/>
      </div>
    </div>

    <a v-for="(config, k) in carouseControllerConfig" :key="k" :class="'carousel-control-'+config.dataBsSlide"
       :data-bs-slide="config.dataBsSlide" href="#carousel-top" rel="noreferrer noopener" role="button">
      <span :class="'carousel-control-'+config.dataBsSlide+'-icon'" aria-hidden="true"></span>
      <span class="visually-hidden">{{ config.text }}</span>
    </a>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, onMounted, nextTick, defineAsyncComponent} from 'vue';
import '@/scss/components/carouse.scss'
import {getImageUrlList} from "@/api/carousel";

export default defineComponent({
  name: 'Carousel',
  components: {
    LazyImg: defineAsyncComponent(() => import('@/components/LazyImg.vue'))
  },
  setup() {
    const data = reactive({
      imageList: [] as Array<string>,
      forceLoad: [] as Array<boolean>,
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

    onMounted(async () => {
      const imageList = (await getImageUrlList()) as Array<string>
      if (!('statusCode' in imageList)) {
        data.imageList = imageList
      }

      await nextTick(() => {
        const carouselItems = document.querySelectorAll('.carousel-item') as unknown as Array<HTMLDivElement>
        if (carouselItems.length > 0) {
          carouselItems[0].classList.add('active')
        }

        const carouselIndicators = (document.querySelector('.carousel-indicators') as unknown as HTMLElement).children as unknown as Array<HTMLOListElement>
        if (carouselIndicators.length > 0) {
          carouselIndicators[0].classList.add('active')
        }
      })

      for (let i = 0; i < data.imageList.length; i++) {
        data.forceLoad[i] = true
        await new Promise<void>(resolve => setTimeout(() => resolve(), 500))
      }
    })

    return {
      ...toRefs(data)
    }
  }
});
</script>
