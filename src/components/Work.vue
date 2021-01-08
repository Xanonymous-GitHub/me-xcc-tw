<template>
  <div class="card mw-100 px-0 mx-2 my-2 shadow">
    <div class="cancel-button" @click.prevent.stop="remove">
      <svg class="d-svg position-relative">
        <use xlink:href="#cancel.svg"/>
      </svg>
    </div>
    <LazyImg :d-src="finalThumbnail" class="card-img-top img-fluid rounded-3 py-3 px-3"/>
    <div class="card-body">
      <span class="badge bg-light rounded-pill text-dark user-select-none">{{ createdAt }}</span>
      <h5 class="card-title text-dark">{{ title }}</h5>
      <p class="card-subtitle text-dark">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, defineAsyncComponent, ref, onMounted} from 'vue';
import '@/svg/cancel.svg'
import '@/scss/components/work.scss'

export default defineComponent({
  name: 'Work',
  props: {
    uid: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      default: 'https://i.imgur.com/Air6TVf.webp',
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
    },
    createdAt: {
      type: String,
      default: '',
      required: true
    }
  },
  components: {
    LazyImg: defineAsyncComponent(() => import('@/components/LazyImg.vue'))
  },
  setup(props, {emit}) {
    const remove = () => {
      emit('remove', props.uid)
    }

    let finalThumbnail = ref<string>('')

    const changeToDefaultThumbnail = () => {
      if (props.thumbnail) {
        finalThumbnail.value = props.thumbnail
      } else {
        finalThumbnail.value = 'https://i.imgur.com/Air6TVf.webp'
      }
    }

    onMounted(() => {
      changeToDefaultThumbnail()
    })

    return {
      finalThumbnail,
      remove
    }
  }
});
</script>
