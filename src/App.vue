<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
  <Footer/>
</template>

<script lang="ts">
import {defineComponent, provide} from "vue";
import '@/scss/app.scss'
import {firebaseType, dbType} from "./firebase/type";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components:{
    Footer
  },
  setup() {
    provide<firebaseType>('firebase', require('./firebase/init').default)
    provide<dbType>('db', require('./firebase/init').db)
  }
})
</script>
