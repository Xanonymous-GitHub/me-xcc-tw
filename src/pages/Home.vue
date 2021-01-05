<template>
  <NavBar/>
  <Header/>
  <Profile/>
  <WorkView/>
  <Carousel/>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import NavBar from '@/components/NavBar.vue'
import Carousel from "@/components/Carousel.vue";
import Header from "@/components/Header.vue";
import Profile from "@/components/Profile.vue";
import WorkView from "@/components/WorkView.vue";

export default defineComponent({
  name: 'Home',
  components: {
    NavBar,
    Carousel,
    Header,
    Profile,
    WorkView
  },
  setup() {
    onMounted(() => {
      document.dispatchEvent(new Event('app-rendered'));
    })
  }
});
</script>
