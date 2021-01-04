<template>
  <div
      class="align-content-center justify-content-center profile-card my-5 d-flex flex-sm-nowrap flex-sm-row flex-column flex-wrap mx-3 mw-100">
    <div class="d-flex justify-content-center align-content-center">
      <img id="avatar" alt="..." class="rounded-circle"
           src="https://i.imgur.com/UUs5dHp.webp">
    </div>
    <div class="">
      <div class="card-body">
        <h5 class="card-title fw-bolder fs-3">About Me</h5>
        <hr/>
        <p class="card-text fw-bold">Xanonymous TeU Lin</p>
        <p class="card-text">True mastery of any skill takes a lifetime, and if you are doing your best, you will not
                             have to worry about failure.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/scss/components/profile.scss'

export default defineComponent({
  name: 'Profile',
  setup() {
    return
  }
});
</script>
