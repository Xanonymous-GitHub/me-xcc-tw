<template>
  <img ref="img" :data-src="dSrc" :src="defaultImgUrl" alt="" class="lozad mask">
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, watchEffect} from 'vue';
import lozad from 'lozad'

export default defineComponent({
  name: 'LazyImg',
  props: {
    dSrc: {
      type: String,
      required: true,
      default: ''
    },
    forceLoad: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  setup(props) {
    const observer = lozad(
        '.lozad', {
          loaded: async (element: HTMLImageElement) => {
            await new Promise(resolve => {
              element.onload = resolve
            })
            element.classList.add('mask__completed')
          }
        }
    )

    const defaultImgUrl = ref<string>('https://i.imgur.com/aVzzr34.webp')
    const img = ref<HTMLImageElement>({} as HTMLImageElement)

    onMounted(() => {
      observer.observe()
      forceLoadService()
    })

    const forceLoadService = () => {
      watchEffect(() => {
        if (props['forceLoad']) {
          observer.triggerLoad(img.value)
        }
      })
    }


    return {
      defaultImgUrl,
      img
    }
  }
});
</script>

<style lang="scss" scoped>
.mask {
  opacity: 0;
  transition: 1s ease;
  min-width: inherit;
  min-height: inherit;
  max-width: inherit;
  max-height: inherit;
  width: auto;
  height: auto;
  background-position: center center;
  background-size: cover;

  &__completed {
    opacity: 1;
  }
}
</style>
