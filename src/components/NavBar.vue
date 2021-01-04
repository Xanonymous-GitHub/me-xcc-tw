<template>
  <nav class="navbar rounded-pill my-3 navbar-expand-lg navbar-light mx-3">
    <div class="container-fluid">
      <span class="navbar-brand text-white user-select-none fw-bolder fs-lg-4">🔥 Xanonymous's Pending Works</span>
      <a href="https://github.com/Xanonymous-GitHub/me-xcc-tw" rel="noreferrer noopener" target="_blank">
        <svg class="d-svg rounded-circle" viewBox="0 0 1 1">
          <use xlink:href="#github.svg"/>
        </svg>
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/scss/components/navbar.scss'
import '@/svg/github.svg'

export default defineComponent({
  name: 'NavBar',
  setup() {
    return
  }
});
</script>
