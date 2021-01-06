<template>
  <NavBar/>
  <Header/>
  <Profile/>
  <WorkView/>
  <Carousel/>
</template>

<script lang="ts">
import {defineComponent, onMounted, defineAsyncComponent} from 'vue';
import NavBar from '@/components/NavBar.vue'
import Header from "@/components/Header.vue";
import Profile from "@/components/Profile.vue";

export default defineComponent({
  name: 'Home',
  components: {
    NavBar,
    Carousel: defineAsyncComponent(() => import('@/components/Carousel.vue')),
    Header,
    Profile,
    WorkView: defineAsyncComponent(() => import('@/components/WorkView.vue'))
  },
  setup() {
    onMounted(() => {
      document.dispatchEvent(new Event('app-rendered'));
    })
  }
});
</script>
