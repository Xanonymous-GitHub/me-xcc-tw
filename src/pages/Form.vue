<template>
  <div class="about">
    <h1>This is form page</h1>
  </div>
</template>


<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import '@/scss/form.scss'

export default defineComponent({
  name: 'Form',
  setup() {
    onMounted(() => {
      document.dispatchEvent(new Event('app-rendered'));
    })
  }
});
</script>
