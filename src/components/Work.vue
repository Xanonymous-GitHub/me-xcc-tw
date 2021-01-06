<template>
  <div class="card mw-100 px-0 mx-2 my-2 shadow">
    <div class="cancel-button" @click.prevent.stop="remove">
      <svg class="d-svg position-relative">
        <use xlink:href="#cancel.svg"/>
      </svg>
    </div>
    <LazyImg :d-src="thumbnail" class="card-img-top img-fluid rounded-3 py-3 px-3"/>
    <div class="card-body">
      <h5 class="card-title text-dark">{{ title }}</h5>
      <p class="card-subtitle text-dark">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/svg/cancel.svg'
import '@/scss/components/work.scss'
import LazyImg from "@/components/LazyImg.vue";

export default defineComponent({
  name: 'Work',
  props: {
    uid: {
      type: String,
      required: true
    },
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
  components: {
    LazyImg
  },
  setup(props, {emit}) {
    const remove = () => {
      emit('remove', props.uid)
    }

    return {
      remove
    }
  }
});
</script>
