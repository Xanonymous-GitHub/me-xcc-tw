<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import {defineComponent, provide} from "vue";
import '@/scss/app.scss'
import {firebaseType, dbType} from "./firebase/type";

export default defineComponent({
  setup() {
    provide<firebaseType>('firebase', require('./firebase/init').default)
    provide<dbType>('db', require('./firebase/init').db)
  }
})
</script>
