<template>
  <div class="done">
    <div class="dot-spin"/>
    <svg id="tick" style="enable-background:new 0 0 37 37;" viewBox="0 0 37 37"
         x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" y="0px">
          <path class="circle path"
                d="M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
                style="fill:#0cdcc7;stroke:#07a796;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;"/>
      <polyline class="tick path" points="11.6,20 15.9,24.2 26.4,13.8 "
                style="fill:none;stroke:#fff;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;"/>
          </svg>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Done',
  setup() {
    return
  }
});
</script>

<style lang="scss" scoped>
.done {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  z-index: 99;

  &__progress {
    top: 40px;
    width: 80px;
    height: 80px;
  }
}

.drawn svg .path {
  opacity: 1;
  stroke-dashoffset: 0;
}

.circle {
  opacity: 0;
  stroke-dasharray: 130;
  stroke-dashoffset: 130;
  transition: all 1s;
}

.tick {
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  transition: stroke-dashoffset 1s 0.5s ease-out;
}
</style>
