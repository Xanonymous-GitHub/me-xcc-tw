<template>
  <main class="add-work">
    <div class="logo my-3 my-sm-5">
      <svg class="d-svg" viewBox="0 0 1 1">
        <use xlink:href="#todo.svg"/>
      </svg>
      <h1 class="text-white fw-bolder main-title d-inline-block align-middle my-0 user-select-none">Works!</h1>
    </div>
    <div class="work-form px-5 py-5 rounded-3 shadow my-3 text-start">
      <form id="new-work-form" :key="formKey" class="w-100 mx-auto position-relative">
        <button v-if="thumbnail && !creating"
                class="btn btn-danger position-absolute cancel-upload shadow rounded-circle"
                type="button" @click.prevent.stop="cancelUploadImg">×
        </button>
        <CircleProgress v-if="creating && !done" :msg="progressMsg"/>
        <Done v-show="creating"/>
        <div :class="{'default':!thumbnail, 'invisible':creating}" class="picture my-3 position-relative px-3 py-3"
             style="height: 200px"
             @click.prevent.stop="uploadButtonClicked">
          <svg class="d-svg position-relative mw-100" style="width: 100px" viewBox="0 0 1 1">
            <use xlink:href="#image.svg"/>
          </svg>
        </div>

        <div :class="{'invisible':creating}" class="mb-3">
          <label class="form-label fw-bolder" for="title-input">*Title</label>
          <input id="title-input" v-model="title" class="form-control" type="text">
        </div>

        <div :class="{'invisible':creating}" class="mb-3">
          <label class="form-label fw-bolder" for="sub-title-input">*Subtitle</label>
          <input id="sub-title-input" v-model="subtitle" class="form-control" type="text">
        </div>

        <button :class="{'disabled':creating || (!title || !subtitle)}"
                autofocus class="btn btn-success btn-sm mx-1 my-1 text-nowrap fw-bolder mw-100 overflow-hidden"
                type="submit" @click.prevent.stop="createWork"
        >
          Create Work
        </button>

        <button :class="{'disabled':creating || changingImg}"
                class="btn btn-primary btn-sm mx-1 my-1 text-nowrap fw-bolder mw-100 overflow-hidden"
                type="submit"
                @click.prevent.stop="uploadButtonClicked">
          {{ thumbnail ? 'Alter' : 'Upload' }} img
        </button>
        <input
            ref="uploader"
            accept="image/jpeg,image/png,image/gif"
            class="d-none"
            type="file"
            @change="onFileChanged($event)"
        >

      </form>
    </div>
  </main>
</template>


<script lang="ts">
import {defineComponent, onMounted, reactive, toRefs, ref, inject, computed, defineAsyncComponent} from 'vue';
import '@/scss/form.scss'
import '@/svg/todo.svg'
import '@/svg/image.svg'
import {dbType} from "@/firebase/type";
import {getNewTimeStamp} from "@/firebase/init";
import {uploadMedia} from "@/api/uploadImg";
import {replaceDefaultPicture} from "@/util/dom";
import {toBase64} from "@/util/encryption";
import {UploadedMedia} from "@/api/type";

export default defineComponent({
  name: 'Form',
  components: {
    CircleProgress: defineAsyncComponent(() => import('@/components/CircleProgress.vue')),
    Done: defineAsyncComponent(() => import('@/components/Done.vue'))
  },
  setup() {
    const data = reactive({
      title: '',
      subtitle: '',
      thumbnailUrl: '',
      thumbnail: undefined as unknown as File,
      creating: false,
      changingImg: false,
      formKey: 0,
      progressMsg: '',
      done: false,
    })

    const uploader = ref({} as HTMLInputElement)
    const thumbnailInput = ref({} as HTMLInputElement)
    const store = inject<dbType>('db') as dbType

    const onFileChanged = async (e: InputEvent) => {
      data.changingImg = true
      const tmpTmg = ((e.target as HTMLInputElement).files as FileList)[0]
      if (isFileImage(tmpTmg)) {
        if (tmpTmg.size < 10 << 20) {
          data.thumbnail = tmpTmg
          const tmpAvatar = (await toBase64(data.thumbnail)) as string
          replaceDefaultPicture(tmpAvatar, document.getElementById('new-work-form') as HTMLFormElement)
        } else {
          alert('file too big!')
        }
      } else {
        alert('Invalid file type!')
      }
      data.changingImg = false
    }

    const createWork = async () => {
      data.creating = true
      const title = data.title.toString().trim()
      const subtitle = data.subtitle.toString().trim()
      let status = 'start'

      if (title && subtitle) {
        let thumbnail = '', imgUrl = ''
        if (data.thumbnail) {
          data.progressMsg = 'uploading image...'
          imgUrl = await uploadImg(data.thumbnail) as string
        }
        if (imgUrl) {
          thumbnail = imgUrl
        }
        const now = Date.now()
        try {
          data.progressMsg = 'creating work...'
          await store.collection('/works').doc(now.toString()).set({
            title,
            subtitle,
            thumbnail,
            createdAt: getNewTimeStamp(new Date())
          })
          status = 'done'
        } catch (e) {
          alert(e)
        }
      } else {
        status = 'inputErr'
      }
      if (status === 'done') {
        data.done = true;
        (document.querySelector('.done') as HTMLDivElement).classList.add('drawn')
        await new Promise<void>(resolve => setTimeout(() => resolve(), 3000))
      }
      data.creating = false
      if (status === 'inputErr') {
        alert('please provide title and subtitle!!')
      } else {
        clearForm()
      }
    }

    const uploadButtonClicked = () => {
      uploader.value.click()
    }

    const isFileImage = (file: File): boolean => {
      const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
      return file && acceptedImageTypes.includes(file['type'])
    }

    const uploadImg = async (file: File): Promise<string | null | undefined> => {
      const {url} = (await uploadMedia(file, 'webp')) as unknown as UploadedMedia
      if (!url) {
        alert('Fail to upload thumbnail!')
        return null
      }
      return url
    }

    const clearForm = () => {
      data.title = ''
      data.subtitle = ''
      data.thumbnail = undefined as unknown as File
      data.formKey++
      data.done = false
    }

    const validateThumbnailInputUrl = computed((): boolean => {
      console.log((!data.thumbnailUrl && thumbnailInput.value.checkValidity()))
      return (!data.thumbnailUrl && thumbnailInput.value.checkValidity())
    })

    const cancelUploadImg = () => {
      data.thumbnail = undefined as unknown as File
      data.formKey++
    }

    onMounted(() => {
      document.dispatchEvent(new Event('app-rendered'));
    })

    return {
      createWork,
      onFileChanged,
      uploader,
      uploadButtonClicked,
      validateThumbnailInputUrl,
      thumbnailInput,
      cancelUploadImg,
      ...toRefs(data)
    }
  }
});
</script>
