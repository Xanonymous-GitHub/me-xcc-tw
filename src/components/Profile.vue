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
        <p class="card-text mw-100 text-wrap text-start px-3">
          True mastery of any skill takes a lifetime, and if you are doing your best, you will not have to worry about
          failure. <br/><br/>
          Based on the original requirements, this webpage has added many features and details to make it more practical and gorgeous.<br/><br/>
          First, I implemented the upload function of the thumbnails, and sent the thumbnails to imgur.com by calling the self-made backend api.<br/><br/>
          Before uploading pictures, you can preview them in advance. When creating a job, the new picture links will be integrated into the data package.<br/><br/>
          Furthermore, in order to improve the efficiency of web page loading, all the image formats on the homepage are webp and lazy-load.<br/><br/>
          In addition, the work-view block on the homepage has the feature of real-time update, which can be synchronized to the latest information at any time.<br/><br/>
          Although this is just homework at the end of the semester, I still try to do my best.<br/><br/>
          Finally, if you haven't found it yet, this page uses the Vue framework, one of the three giants of front-end technology!<br/><br/>
          If you want to know the source code of this page, please click the github link in the upper right corner.
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
import {defineComponent, reactive, toRefs ,defineAsyncComponent} from 'vue';
import '@/scss/components/profile.scss'
import '@/svg/gmail.svg'
import '@/svg/telegram.svg'
import '@/svg/youtube.svg'
import '@/svg/linkedIn.svg'
import '@/svg/instagram.svg'

export default defineComponent({
  name: 'Profile',
  components: {
    LazyImg: defineAsyncComponent(() => import('@/components/LazyImg.vue'))
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
