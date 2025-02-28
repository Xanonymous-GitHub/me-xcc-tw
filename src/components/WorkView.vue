<template>
  <div class="work-view my-3 my-sm-3 mx-sm-auto rounded-3 mx-3 shadow position-relative">
    <div class="position-absolute new-work-btn-area">
      <router-link rel="noreferrer noopener" target='_blank' to="/form">
        <button class="btn text-white position-relative shadow fw-bolder fs-6 mx-2 my-2" type="button">+
        </button>
      </router-link>
      <p class="user-select-none live">
        <span class="circle"/>
        Live
      </p>
    </div>
    <h1 class="py-4 py-sm-4 my-0">
      <svg class="d-svg" viewBox="0 0 1 1">
        <use xlink:href="#todo.svg"/>
      </svg>
      Works!
    </h1>
    <hr class="w-75 mx-auto my-0"/>
    <div class="container py-3 px-3 mw-100">
      <CircleProgress v-if="processing" :msg="progressMsg"/>
      <div :class="{'wall__show':processing}" class="wall position-absolute"/>
      <div :key="workViewKey" :class="{'invisible':processing}"
           class="row mw-100 position-relative mx-auto justify-content-center">
        <WorkCard v-for="(work, k) in works" :key="k"
                  :created-at="timestampConversion(work.createdAt)"
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
import {defineComponent, inject, onMounted, reactive, toRefs, defineAsyncComponent, nextTick} from 'vue';
import '@/scss/components/work-view.scss'
import {dbType, Work, time} from "@/firebase/type";
import {getCurrentWorks, liveSubscribe} from "@/firebase/getWork";
import '@/svg/todo.svg'
import '@/svg/add.svg'
import timeFormater from "@/util/timeFormater";

export default defineComponent({
  name: 'WorkView',
  components: {
    WorkCard: defineAsyncComponent(() => import('@/components/Work.vue')),
    CircleProgress: defineAsyncComponent(() => import('@/components/CircleProgress.vue'))
  },
  setup() {
    const store = inject<dbType>('db') as dbType
    const data = reactive({
      processing: false,
      works: undefined as unknown as Array<Work>,
      progressMsg: '',
      workViewKey: 0
    })

    const remove = async (uid: string) => {
      data.processing = true
      await nextTick(async () => {
        try {
          await store.collection('/works').doc(uid).delete()
        } catch (e) {
          alert(e)
          data.processing = false
          return
        }
        await displayWorks()
      })
      data.processing = false
    }

    const checkIfNeedToShowEmptyCard = () => {
      const emptyCard = document.getElementById('empty-card') as HTMLDivElement
      emptyCard.classList.toggle('d-none', !!data.works.length)
    }

    const displayWorks = async () => {
      data.works = await getCurrentWorks(store)
      data.workViewKey++
      await nextTick(() => {
        checkIfNeedToShowEmptyCard()
      })
    }

    const timestampConversion = (timestamp: time): string => {
      return timeFormater(timestamp.toDate().valueOf())
    }

    onMounted(async () => {
      data.processing = true
      await displayWorks()
      liveSubscribe(store, displayWorks)
      data.processing = false
    })

    return {
      remove,
      timestampConversion,
      ...toRefs(data)
    }
  }
});
</script>
