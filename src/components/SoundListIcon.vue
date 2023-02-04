<template>
  <BaseSvg viewBox="0 0 27 27" v-bind="$attrs">
    <circle cx="15" cy="24" r="3" fill="currentColor" />
    <circle cx="24" cy="24" r="3" fill="currentColor" />
    <line
      x1="17"
      y1="14"
      x2="17"
      y2="24"
      stroke="currentColor"
      stroke-width="2"
    />
    <line
      x1="26"
      y1="14"
      x2="26"
      y2="24"
      stroke="currentColor"
      stroke-width="2"
    />
    <line
      x1="18"
      y1="14"
      x2="25"
      y2="14"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
    />
    <line
      x1="2"
      y1="2"
      x2="17"
      y2="2"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
    />
    <line
      x1="2"
      y1="8"
      x2="17"
      y2="8"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
    />
    <line
      x1="2"
      y1="14"
      x2="12"
      y2="14"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
    />
  </BaseSvg>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: 'SoundListIcon',

  inheritAttrs: false,
})
</script>
