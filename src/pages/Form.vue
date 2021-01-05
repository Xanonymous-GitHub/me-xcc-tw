<template>
  <main class="add-work">
    <div class="logo my-3 my-sm-5">
      <svg class="d-svg rounded-circle" viewBox="0 0 1 1">
        <use xlink:href="#todo.svg"/>
      </svg>
    </div>
    <div class="work-form w-50 mx-auto px-5 py-5 rounded-3 shadow my-3 text-start">
      <form class="w-100 mx-auto">
        <div class="mb-3">
          <label class="form-label" for="exampleInputEmail1">Email address</label>
          <input id="exampleInputEmail1" aria-describedby="emailHelp" class="form-control" type="email">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="exampleInputPassword1">Password</label>
          <input id="exampleInputPassword1" class="form-control" type="password">
        </div>
        <div class="mb-3 form-check">
          <input id="exampleCheck1" class="form-check-input" type="checkbox">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  </main>
</template>


<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import '@/scss/form.scss'
import '@/svg/todo.svg'

export default defineComponent({
  name: 'Form',
  setup() {
    onMounted(() => {
      document.dispatchEvent(new Event('app-rendered'));
    })
  }
});
</script>
