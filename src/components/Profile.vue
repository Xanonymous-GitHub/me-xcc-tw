<template>
  <div
      class="align-content-center justify-content-center profile-card my-5 d-flex flex-sm-row flex-column flex-wrap mx-auto w-75 mw-100 position-relative">
    <div class="d-flex justify-content-center align-content-center py-3">
      <LazyImg id="avatar" class="rounded-circle shadow" d-src="https://i.imgur.com/UUs5dHp.webp"/>
    </div>
    <div class="px-3 mw-100">
      <div class="canprd-body mw-100">
        <h5 class="card-title fw-bolder fs-3">About Me</h5>
        <hr/>
        <p class="card-text fw-bold mw-100 text-wrap">Xanonymous TeU Lin 林天佑 108820003</p>
        <p class="card-text mw-100 text-wrap justify">
          True mastery of any skill takes a lifetime, and if you are doing your best, you will not have to worry about
          failure.
          Jonah Creed is currently enrolled as a third-year student at Birmingham City University and he specializes in
          Adult Nursing. Like many other adult students, he's required to arrange and meet specific criteria so he can
          qualify to pursue his chosen healthcare career.
          Structuring involves giving the right priorities to pathways that enable him to achieve the career path he has
          chosen. For instance, Jonah has to reach an educational level of level 3 as a requirement and a level 2
          minimum for Math and English proficiency. Jonah successfully finished his level 3 Business and Finance, but
          the University didn't consider because he accomplished this eighteen years ago.
        </p>

        <div class="contact d-flex flex-column flex-sm-row flex-wrap rounded-pill my-1 py-1">
          <address v-for="(contact, k) in contacts" :key="k" class="fw-bolder mx-sm-3 mx-0 rounded-pill px-1 my-auto">
            <svg class="d-svg rounded-circle" viewBox="0 0 1 1">
              <use :xlink:href="contact.svg"/>
            </svg>
            <a :href="contact.link" class="ml-1" rel="noreferrer noopener" target="_blank">
              {{ contact.title }}
            </a>
          </address>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue';
import '@/scss/components/profile.scss'
import '@/svg/gmail.svg'
import '@/svg/telegram.svg'
import '@/svg/youtube.svg'
import '@/svg/linkedIn.svg'
import '@/svg/instagram.svg'
import LazyImg from "@/components/LazyImg.vue";

export default defineComponent({
  name: 'Profile',
  components: {
    LazyImg
  },
  setup() {
    const data = reactive({
      contacts: [
        {
          title: 'Gmail',
          svg: '#gmail.svg',
          link: 'mailto:trusaidlin@gmail.com'
        },
        {
          title: 'Telegram',
          svg: '#telegram.svg',
          link: 'https://t.me/XanonymousTG'
        },
        {
          title: 'Youtube',
          svg: '#youtube.svg',
          link: 'https://youtube.com/anonymousX_TM'
        },
        {
          title: 'LinkedIn',
          svg: '#linkedIn.svg',
          link: 'https://www.linkedin.com/in/xanonymous'
        },
        {
          title: 'Instagram',
          svg: '#instagram.svg',
          link: 'https://instagram.com/xanonymous_ig'
        }
      ]
    })

    return {
      ...toRefs(data)
    }
  }
});
</script>
