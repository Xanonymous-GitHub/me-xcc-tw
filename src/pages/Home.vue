<template>
  <NavBar/>
  <Header/>
  <Profile/>
  <Carousel/>
</template>

<script lang="ts">
import {defineComponent, onMounted, inject} from 'vue';
import {firebaseType} from "@/firebase";
import NavBar from '@/components/NavBar.vue'
import Carousel from "@/components/Carousel.vue";
import Header from "@/components/Header.vue";
import Profile from "@/components/Profile.vue";

export default defineComponent({
  name: 'Home',
  components: {
    NavBar,
    Carousel,
    Header,
    Profile
  },
  setup() {
    const firebase = inject<firebaseType>('firebase')

    onMounted(() => {
      document.dispatchEvent(new Event('app-rendered'));
    })
  }
});
</script>
