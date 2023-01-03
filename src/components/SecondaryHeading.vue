<template>
  <BaseBox
    :component="component"
    class="block w-full text-base border-b border-inherit pb-4.5"
  >
    <slot />
  </BaseBox>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: 'SecondaryHeading',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'span' },
  },
})
</script>
