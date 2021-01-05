<template>
  <main class="add-work">
    <div class="logo my-3 my-sm-5">
      <svg class="d-svg" viewBox="0 0 1 1">
        <use xlink:href="#todo.svg"/>
      </svg>
    </div>
    <div class="work-form px-5 py-5 rounded-3 shadow my-3 text-start">
      <form id="new-work-form" class="w-100 mx-auto position-relative">
        <div :class="{'default':!thumbnail}" class="picture my-3 position-relative" style="height: 200px"
             @click.prevent.stop="uploadButtonClicked">
          <svg class="d-svg position-relative" style="width: 100px" viewBox="0 0 1 1">
            <use xlink:href="#image.svg"/>
          </svg>
        </div>

        <div class="mb-3">
          <label class="form-label fw-bolder" for="title-input">Title</label>
          <input id="title-input" v-model="title" class="form-control" type="text">
        </div>
        <div class="mb-3">
          <label class="form-label fw-bolder" for="sub-title-input">Subtitle</label>
          <input id="sub-title-input" v-model="subtitle" class="form-control" type="text">
        </div>
        <button :class="{'disabled':creating || changingImg}"
                class="btn btn-primary btn-sm mx-1 my-1 text-nowrap fw-bolder mw-100 overflow-hidden"
                type="submit"
                @click.prevent.stop="uploadButtonClicked">
          Upload img
        </button>
        <input
            ref="uploader"
            accept="image/jpeg,image/png,image/gif"
            class="d-none"
            type="file"
            @change="onFileChanged($event)"
        >
        <button :class="{'disabled':creating || (!title || !subtitle)}"
                class="btn btn-success btn-sm mx-1 my-1 text-nowrap fw-bolder mw-100 overflow-hidden" type="submit"
                @click.prevent.stop="createWork"
        >
          Create Work
        </button>
      </form>
    </div>
  </main>
</template>


<script lang="ts">
import {defineComponent, onMounted, reactive, toRefs, ref, inject} from 'vue';
import '@/scss/form.scss'
import '@/svg/todo.svg'
import '@/svg/image.svg'
import {dbType, UploadedMedia} from "@/firebase/type";
import {getNewTimeStamp} from "@/firebase/init";
import {uploadMedia, toBase64, replaceDefaultPicture} from "@/firebase/uploadImg";

export default defineComponent({
  name: 'Form',
  setup() {
    const data = reactive({
      title: '',
      subtitle: '',
      thumbnail: undefined as unknown as File,
      creating: false,
      changingImg: false
    })

    const uploader = ref({} as HTMLInputElement)
    const store = inject<dbType>('db') as dbType

    const onFileChanged = async (e: InputEvent) => {
      data.changingImg = true
      data.thumbnail = ((e.target as HTMLInputElement).files as FileList)[0]
      if (isFileImage(data.thumbnail)) {
        if (data.thumbnail.size < 10 << 20) {
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
      const subtitle = data.title.toString().trim()

      let thumbnail = '', imgUrl = ''
      if (data.thumbnail) {
        imgUrl = await uploadImg(data.thumbnail) as string
      }
      if (imgUrl) {
        thumbnail = imgUrl
      }
      const now = Date.now()
      try {
        await store.collection('/works').doc(now.toString()).set({
          title,
          subtitle,
          thumbnail,
          createdAt: getNewTimeStamp(new Date())
        })
      } catch (e) {
        alert(e)
      }
      data.creating = false
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

    onMounted(() => {
      document.dispatchEvent(new Event('app-rendered'));
    })

    return {
      createWork,
      onFileChanged,
      uploader,
      uploadButtonClicked,
      ...toRefs(data)
    }
  }
});
</script>
