<template>
  <img :data-src="dSrc" alt="" class="lozad mask" src="">
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

  &__completed {
    opacity: 1;
  }
}
</style>
