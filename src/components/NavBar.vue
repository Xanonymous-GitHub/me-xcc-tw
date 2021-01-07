<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <span class="navbar-brand text-white user-select-none fw-bolder fs-lg-4 fs-md-3 fs-sm-2">🔥 X's Pending Works</span>
      <a href="https://github.com/Xanonymous-GitHub/me-xcc-tw" rel="noreferrer noopener" target="_blank">
        <svg class="d-svg rounded-circle" viewBox="0 0 1 1">
          <use xlink:href="#github.svg"/>
        </svg>
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue';
import '@/scss/components/navbar.scss'
import '@/svg/github.svg'

export default defineComponent({
  name: 'NavBar',
  setup() {
    onMounted(() => {
      // const el = document.querySelector(".only-one") as HTMLElement
      const bar = document.querySelector('.navbar') as HTMLElement
      const observer = new IntersectionObserver(
          ([e]) => {
            bar.classList.toggle("nav__sticky", e.intersectionRatio < 1)
          },
          {threshold: [1]}
      );

      observer.observe(bar);
    })
  }
});
</script>
