<template>
  <img :data-src="dSrc" alt="" class="lozad mask" src="https://i.imgur.com/aVzzr34.webp">
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import lozad from 'lozad'

export default defineComponent({
  name: 'LazyImg',
  props: {
    dSrc: {
      type: String,
      required: true,
      default: ''
    }
  },
  setup() {
    onMounted(() => {
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
      observer.observe()
    })
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

  &__completed {
    opacity: 1;
  }
}
</style>
