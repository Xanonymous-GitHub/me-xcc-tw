<template>
  <div class="work-view my-3 my-sm-3 mx-sm-auto rounded-3 mx-3 shadow">
    <h1 class="py-3 py-sm-3 my-0">
      <svg class="d-svg" viewBox="0 0 1 1">
        <use xlink:href="#todo.svg"/>
      </svg>
      Works!
    </h1>
    <hr class="w-75 mx-auto my-0"/>
    <div class="container py-3 px-3 mw-100">
      <div class="row mw-100 position-relative mx-auto justify-content-center">
        <WorkCard v-for="(work, k) in works" :key="k"
                  :subtitle="work.subtitle"
                  :thumbnail="work.thumbnail"
                  :title="work.title" :uid="work.id" class="col-3" @remove="remove"/>
        <router-link id="empty-card" class="d-inline-block w-auto" rel="noreferrer noopener" target='_blank' to="/form">
          <div class="card empty-card mw-100 px-0 mx-2 my-2">
            <div class="card-body">
              <svg class="d-svg add-svg" viewBox="0 0 1 1">
                <use xlink:href="#add.svg"/>
              </svg>
            </div>
          </div>
        </router-link>
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
import '@/svg/todo.svg'
import '@/svg/add.svg'

export default defineComponent({
  name: 'WorkView',
  components: {
    WorkCard
  },
  setup() {
    const store = inject<dbType>('db') as dbType
    const data = reactive({
      processing: false,
      works: undefined as unknown as Array<Work>
    })

    const remove = (uid: string) => {
      data.processing = true
      try {
        store.collection('/works').doc(uid).delete()
      } catch (e) {
        alert(e)
        data.processing = false
        return
      }
      const indexToRemove = data.works.findIndex(work => work.id === uid)
      if (indexToRemove !== -1) {
        data.works.splice(indexToRemove, 1)
        checkIfNeedToShowEmptyCard()
      }
      data.processing = false
    }

    const checkIfNeedToShowEmptyCard = () => {
      const emptyCard = document.getElementById('empty-card') as HTMLDivElement
      if (data.works.length) {
        emptyCard.classList.add('d-none')
      } else {
        emptyCard.classList.remove('d-none')
      }
    }

    const displayWorks = async () => {
      data.processing = true
      data.works = await getCurrentWorks(store)
      checkIfNeedToShowEmptyCard()
      data.processing = false
    }

    onMounted(async () => {
      await displayWorks()
    })

    return {
      remove,
      ...toRefs(data)
    }
  }
});
</script>
