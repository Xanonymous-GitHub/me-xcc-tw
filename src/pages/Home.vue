<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, inject} from 'vue';
import {firebaseType} from "@/firebase";
import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const firebase = inject<firebaseType>('firebase')

    onMounted(() => {
      document.dispatchEvent(new Event('app-rendered'));
      console.log(firebase)
    })
  }
});
</script>
