<template>
  <BaseSvg viewBox="0 0 12 12" v-bind="$attrs">
    <circle cx="6" cy="6" r="3" fill="currentColor" />
  </BaseSvg>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: 'SingleDotIcon',

  inheritAttrs: false,
})
</script>
