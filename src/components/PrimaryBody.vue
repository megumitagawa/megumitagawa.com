<template>
  <BaseBox
    :component="component"
    :class="['block w-full p-5 rounded bg-white/75 backdrop-blur shadow-md']"
  >
    <slot />
  </BaseBox>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: 'PrimaryBody',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'span' },
  },
})
</script>
