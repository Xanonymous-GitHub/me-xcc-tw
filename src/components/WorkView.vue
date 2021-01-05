<template>
  <div class="work-view my-3 my-sm-3 mx-sm-auto rounded-3 mx-3">
    <h1 class="py-3 py-sm-3 my-0">Works</h1>
    <hr class="w-75 mx-auto my-0"/>
    <div class="container py-3 px-3 mw-100">
      <div class="row mw-100 position-relative mx-auto justify-content-center">
        <WorkCard v-for="(work, k) in works" :key="k"
                  :subtitle="work.subtitle"
                  :thumbnail="work.thumbnail"
                  :title="work.title" class="col-3"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, inject, onMounted, reactive, toRefs} from 'vue';
import '@/scss/components/work-view.scss'
import {dbType, Work} from "@/firebase/type";
import {getCurrentWorks} from "@/firebase/getWork";
import WorkCard from "@/components/Work.vue";

export default defineComponent({
  name: 'WorkView',
  components: {
    WorkCard
  },
  setup() {
    const store = inject<dbType>('db') as dbType
    const data = reactive({
      works: undefined as unknown as Array<Work>
    })

    onMounted(async () => {
      data.works = await getCurrentWorks(store)
    })

    return {
      ...toRefs(data)
    }
  }
});
</script>
