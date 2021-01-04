<template>
  <NavBar/>
  <Carousel/>
</template>

<script lang="ts">
import {defineComponent, onMounted, inject} from 'vue';
import {firebaseType} from "@/firebase";
import NavBar from '@/components/NavBar.vue'
import Carousel from "@/components/Carousel.vue";

export default defineComponent({
  name: 'Home',
  components: {
    NavBar,
    Carousel
  },
  setup() {
    const firebase = inject<firebaseType>('firebase')

    onMounted(() => {
      document.dispatchEvent(new Event('app-rendered'));
    })
  }
});
</script>
