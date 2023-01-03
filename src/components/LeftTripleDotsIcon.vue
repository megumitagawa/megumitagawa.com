<template>
  <BaseSvg viewBox="0 0 20 20" v-bind="$attrs">
    <circle cx="3" cy="10" r="3" fill="currentColor" />
    <circle cx="12" cy="10" r="2" fill="currentColor" />
    <circle cx="19" cy="10" r="1" fill="currentColor" />
  </BaseSvg>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: 'LeftTripleDotsIcon',

  inheritAttrs: false,
})
</script>
