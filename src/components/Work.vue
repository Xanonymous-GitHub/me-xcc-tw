<template>
  <div class="card mw-100 px-0 mx-2 my-2" style="width: 18rem;">
    <img :src="thumbnail" alt="" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title text-dark">{{ title }}</h5>
      <p class="card-subtitle text-dark">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Work',
  props: {
    thumbnail: {
      type: String,
      default: '',
      required: true
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    subtitle: {
      type: String,
      default: '',
      required: true
    }
  },
  setup() {
    return
  }
});
</script>
