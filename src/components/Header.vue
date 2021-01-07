<template>
  <header ref="header"
          class="lozad my-3 bg-secondary mx-4 h-25 rounded-3"
          data-background-image="https://i.imgur.com/2YhIVkZ.webp"
          style='background-size: cover;
          background-position: center;'>
  </header>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import lozad from 'lozad'

export default defineComponent({
  name: 'Header',
  setup() {
    const header = ref({} as HTMLHeadElement)

    onMounted(() => {
      const observer = lozad(header.value);
      observer.observe();
    })

    return {
      header
    }
  }
});
</script>
